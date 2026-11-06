import BlogDetailView from "@/src/views/resources/BlogDetailView";
import { BLOGS_DATA } from "@/src/data/resourcesData";

const blog = BLOGS_DATA.find((b) => b.slug === "auto-repair-inventory-management-guide");

export const metadata = {
  title: blog.seoTitle,
  description: blog.seoDescription,
  keywords: blog.keywords.join(", "),
  alternates: {
    canonical: `https://www.garagesaarthi.com/resources/blogs/${blog.slug}/`,
  },
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  openGraph: {
    type: "article",
    title: blog.seoTitle,
    description: blog.seoDescription,
    url: `https://www.garagesaarthi.com/resources/blogs/${blog.slug}/`,
    siteName: "GarageSaarthi",
    publishedTime: blog.isoDate,
    authors: [blog.author.name],
    images: [
      {
        url: "https://www.garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: blog.title,
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: blog.seoTitle,
    description: blog.seoDescription,
    images: ["https://www.garagesaarthi.com/garage.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `https://www.garagesaarthi.com/resources/blogs/${blog.slug}/#article`,
      "headline": blog.title,
      "description": blog.excerpt,
      "datePublished": blog.isoDate,
      "dateModified": blog.isoDate,
      "mainEntityOfPage": `https://www.garagesaarthi.com/resources/blogs/${blog.slug}/`,
      "author": {
        "@type": "Organization",
        "name": blog.author.name,
      },
      "publisher": {
        "@type": "Organization",
        "name": "GarageSaarthi",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.garagesaarthi.com/GS.svg",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.garagesaarthi.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Resources",
          "item": "https://www.garagesaarthi.com/resources/",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Blogs",
          "item": "https://www.garagesaarthi.com/resources/blogs/",
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": blog.shortTitle,
          "item": `https://www.garagesaarthi.com/resources/blogs/${blog.slug}/`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": blog.faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a,
        },
      })),
    },
  ],
};

export default function BlogPostPage() {
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

