import { notFound } from "next/navigation";
import BlogDetailView from "@/src/views/resources/BlogDetailView";
import { BLOGS_DATA } from "@/src/data/resourcesData";
import { API_URL } from "@/src/config/env";

/**
 * Fetch blog by slug from seed data or backend API
 */
async function getBlogBySlug(slug) {
  // 1. Check local seed articles first
  const seedBlog = BLOGS_DATA.find((b) => b.slug === slug);
  if (seedBlog) return seedBlog;

  // 2. Fetch from backend API
  try {
    const res = await fetch(`${API_URL}/blogs/detail/${slug}`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data) {
        const b = json.data;
        return {
          id: b._id,
          slug: b.slug,
          title: b.title,
          shortTitle: b.shortTitle || b.title,
          category: b.category,
          readTime: b.readTime || "5 min read",
          publishedDate: b.publishedAt
            ? new Date(b.publishedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })
            : "Recent",
          isoDate: b.publishedAt || b.createdAt || new Date().toISOString(),
          excerpt: b.excerpt,
          content: b.content,
          author: b.author || {
            name: "GarageSaarthi Editorial Team",
            role: "Automotive Operations Specialist",
            avatar: "GS",
          },
          seoTitle: b.seo?.metaTitle || `${b.title} | GarageSaarthi`,
          seoDescription: b.seo?.metaDescription || b.excerpt,
          keywords: Array.isArray(b.seo?.keywords) && b.seo.keywords.length > 0
            ? b.seo.keywords
            : [b.category, "garage management", "automotive workshop"],
          coverImage: b.coverImage || "https://www.garagesaarthi.com/garage.png",
        };
      }
    }
  } catch (err) {
    console.warn("Could not fetch blog detail from API:", err);
  }

  return null;
}

/**
 * Static Params generation for static export
 */
export async function generateStaticParams() {
  const seedSlugs = BLOGS_DATA.map((b) => ({ slug: b.slug }));
  try {
    const res = await fetch(`${API_URL}/blogs?limit=all`);
    if (res.ok) {
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        const apiSlugs = json.data.map((b) => ({ slug: b.slug }));
        const allSlugs = Array.from(
          new Set([...seedSlugs.map((s) => s.slug), ...apiSlugs.map((s) => s.slug)])
        );
        return allSlugs.map((slug) => ({ slug }));
      }
    }
  } catch {
    // API might not be running during build
  }
  return seedSlugs;
}

/**
 * SEO Metadata
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Article Not Found | GarageSaarthi",
      robots: "noindex, nofollow",
    };
  }

  const title = blog.seoTitle || `${blog.title} | GarageSaarthi`;
  const description = blog.seoDescription || blog.excerpt;
  const canonicalUrl = `https://www.garagesaarthi.com/resources/blogs/${blog.slug}/`;

  return {
    title,
    description,
    keywords: Array.isArray(blog.keywords) ? blog.keywords.join(", ") : "",
    alternates: {
      canonical: canonicalUrl,
    },
    robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
    openGraph: {
      type: "article",
      title,
      description,
      url: canonicalUrl,
      siteName: "GarageSaarthi",
      publishedTime: blog.isoDate,
      authors: [blog.author?.name || "GarageSaarthi"],
      images: [
        {
          url: blog.coverImage || "https://www.garagesaarthi.com/garage.png",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [blog.coverImage || "https://www.garagesaarthi.com/garage.png"],
    },
  };
}

export default async function DynamicBlogPage({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://www.garagesaarthi.com/resources/blogs/${blog.slug}/#article`,
        headline: blog.title,
        description: blog.excerpt,
        datePublished: blog.isoDate,
        dateModified: blog.isoDate,
        mainEntityOfPage: `https://www.garagesaarthi.com/resources/blogs/${blog.slug}/`,
        author: {
          "@type": "Person",
          name: blog.author?.name || "GarageSaarthi Editorial Team",
          jobTitle: blog.author?.role || "Automotive Operations Specialist",
        },
        publisher: {
          "@type": "Organization",
          name: "GarageSaarthi",
          url: "https://www.garagesaarthi.com/",
          logo: {
            "@type": "ImageObject",
            url: "https://www.garagesaarthi.com/GS.svg",
          },
        },
        image: blog.coverImage || "https://www.garagesaarthi.com/garage.png",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetailView blog={blog} />
    </>
  );
}

