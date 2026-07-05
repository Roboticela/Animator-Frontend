import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { getAllPosts } from '@/lib/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blogs/${post.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/blogs`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...blogEntries,
  ];
}
