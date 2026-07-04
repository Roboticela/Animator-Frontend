import { SITE_NAME } from '@/lib/constants';

const BRAND_SUFFIX = ` | ${SITE_NAME}`;
const MAX_TITLE_LENGTH = 60;
const META_DESC_MIN = 150;
const META_DESC_MAX = 160;

export function truncateText(text: string, maxLength: number): string {
  const plain = text.replace(/\s+/g, ' ').trim();
  if (plain.length <= maxLength) return plain;
  const truncated = plain.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim()}…`;
}

export function buildSeoTitle(pageTitle: string): { absolute: string } {
  const suffix = BRAND_SUFFIX;
  const maxPageTitleLength = MAX_TITLE_LENGTH - suffix.length;

  if (pageTitle.length <= maxPageTitleLength) {
    return { absolute: `${pageTitle}${suffix}` };
  }

  const shortened = truncateText(pageTitle, maxPageTitleLength).replace(/…$/, '');
  return { absolute: `${shortened}${suffix}` };
}

export function buildMetaDescription(title: string, content: string): string {
  const plain = content.replace(/\s+/g, ' ').trim();
  const lead = truncateText(plain, 110).replace(/…$/, '');

  const prefix = `${title}. `;
  let description = `${prefix}${lead}`;

  if (description.length < META_DESC_MIN && plain.length > lead.length) {
    description = truncateText(`${prefix}${plain}`, META_DESC_MAX);
  }

  if (description.length > META_DESC_MAX) {
    description = truncateText(description, META_DESC_MAX);
  }

  return description;
}

export function buildExcerpt(content: string, maxLength = 200): string {
  return truncateText(content.replace(/\s+/g, ' ').trim(), maxLength);
}

export const HOME_SEO = {
  title: buildSeoTitle('3D Model Animator — Rig, Animate & Export'),
  description:
    'Free open-source 3D animator with a timeline editor, bone rigging, procedural animations, and multi-format export. Animate GLB, FBX, and OBJ models in your browser or desktop.',
};

export const BLOG_INDEX_SEO = {
  title: buildSeoTitle('3D Animation Guides and Tutorials'),
  description:
    'In-depth guides on 3D animation, rigging, keyframing, procedural motion, and getting the most from the Animator tool for game dev, VFX, and interactive media.',
};
