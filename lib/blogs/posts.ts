import { BlogPostMeta } from './types';
import { titleToSlug } from './utils';

const BLOG_TITLES = [
  'What Is a 3D Animator Tool and Why Every Beginner Should Try One',
  'The Complete Guide to Bone Rigging for 3D Models',
  'How to Animate a Walk Cycle Step by Step',
  'Free 3D Animation Software: Why "Free" Doesn\'t Have to Mean "Limited"',
  'Open Source 3D Animation Tools Explained (And Why AGPL-3.0 Matters)',
  'Browser-Based 3D Animation: Can You Really Skip the Install?',
  'Keyframe Animation 101: The Building Blocks of Motion',
  'Procedural Animation vs Manual Keyframing: Which Should You Use?',
] as const;

export const BLOG_POSTS_META: BlogPostMeta[] = BLOG_TITLES.map((title, index) => ({
  number: index + 1,
  title,
  slug: titleToSlug(title),
  excerpt: '',
}));

export const BLOGS_PER_PAGE = 30;

export function getPostMetaBySlug(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS_META.find((post) => post.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return BLOG_POSTS_META.map((post) => post.slug);
}
