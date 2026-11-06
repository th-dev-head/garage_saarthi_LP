import { API_URL } from "@/src/config/env";
import { BLOGS_DATA } from "@/src/data/resourcesData";

// In-Memory Cache (No localStorage used)
let inMemoryBlogs = null;
let inFlightFetch = null;

/**
 * In-Memory Blog Cache
 * Avoids repeated API calls during SPA page transitions while ensuring
 * fresh data loads upon full page refresh without storing anything in localStorage.
 */
export async function getCachedBlogs() {
  // 1. If already loaded in JavaScript memory, return instantly (0ms)
  if (Array.isArray(inMemoryBlogs) && inMemoryBlogs.length > 0) {
    return inMemoryBlogs;
  }

  // 2. If a fetch is already in progress, reuse the same promise to prevent duplicate requests
  if (inFlightFetch) {
    return inFlightFetch;
  }

  // 3. Fetch from API
  inFlightFetch = (async () => {
    try {
      const res = await fetch(`${API_URL}/blogs?limit=all`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          const apiBlogs = json.data.map((b) => ({
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
            excerpt: b.excerpt,
            author: b.author || {
              name: "GarageSaarthi Editorial Team",
              role: "Automotive Operations Specialist",
              avatar: "GS",
            },
          }));

          // Merge API blogs with static seed blogs
          const apiSlugs = new Set(apiBlogs.map((b) => b.slug));
          const remainingSeed = BLOGS_DATA.filter((b) => !apiSlugs.has(b.slug));
          inMemoryBlogs = [...apiBlogs, ...remainingSeed];
          return inMemoryBlogs;
        }
      }
    } catch (err) {
      console.warn("Could not load blogs from API, using fallback data:", err);
    } finally {
      inFlightFetch = null;
    }

    inMemoryBlogs = BLOGS_DATA;
    return inMemoryBlogs;
  })();

  return inFlightFetch;
}

/**
 * Reset memory cache if ever needed programmatically
 */
export function resetMemoryBlogCache() {
  inMemoryBlogs = null;
  inFlightFetch = null;
}
