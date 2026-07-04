import { BlogPostMeta } from './types';
import { titleToSlug } from './utils';

const BLOG_TITLES = [
  'What Is 3D Animation and How Does It Work?',
  'Getting Started with Bone-Based Rigging for Beginners',
  'Understanding the Animation Timeline: A Complete Guide',
  'Keyframe Animation vs Procedural Animation: Which Should You Use?',
  'How to Import 3D Models for Animation',
  'Introduction to Inverse Kinematics in 3D Animation',
  'The Role of Reference Videos in Character Animation',
  'How to Create a Walk Cycle for a 3D Character',
  'Understanding Weight Painting for Skinned Meshes',
  '3D Animation vs 2D Animation: Key Differences Explained',
  'Best Practices for Rigging 3D Characters',
  'How to Export Animated 3D Models: Formats and Workflows',
  'Understanding GLB and GLTF: The Modern 3D Format',
  'The Basics of Squash and Stretch in 3D Animation',
  'How Procedural Animation Works Under the Hood',
  'A Beginners Guide to the Animation Viewport',
  'Top Animation Principles Every 3D Artist Should Know',
  'How to Animate Facial Expressions for Game Characters',
  'Understanding Bone Constraints in 3D Rigging',
  'How to Animate Clothing and Soft Body Objects',
  'The Difference Between Forward and Inverse Kinematics',
  'How Open-Source 3D Tools Are Changing the Industry',
  'Animation for Game Developers: What You Need to Know',
  'How to Build a Smooth Idle Animation for Characters',
  'Tips for Animating Creature Locomotion Cycles',
  'How Texture Maps Affect 3D Animation Quality',
  'Creating Realistic Motion with Physics-Based Animation',
  'A Guide to 3D Model Formats: GLB vs FBX vs OBJ',
  'How to Use Reference Viewports for Accurate Animation',
  'The History of 3D Computer Animation',
  'How to Animate Camera Movements in 3D Scenes',
  'Understanding Easing and Timing in Animation',
  'How to Create a Run Cycle for a 3D Character',
  'Working with Multiple Bone Chains in a Single Rig',
  'How to Animate Props and Environmental Objects',
  'Scene Lighting and Its Impact on Animated 3D Models',
  'Optimizing Your 3D Models for Animation Performance',
  'How to Create a Jump Animation with Secondary Motion',
  'Understanding Animation Layers and Blending',
  'A Workflow Guide from Modeling to Final Animated Export',
  'How to Animate Hands and Fingers Realistically',
  'The Role of Muscle Systems in Advanced Character Rigs',
  'Retargeting Animations Between Different Character Rigs',
  'How to Animate Eyes and Brows for Emotional Expression',
  'Understanding Frame Rates in 3D Animation',
  'How to Present 3D Animation Work in a Portfolio',
  'Animation for VR and AR: Special Considerations',
  'How to Use Motion Paths for Object Animation',
  'The Art of Secondary Motion: Hair, Clothes, and Accessories',
  'Your Complete Journey from 3D Animation Beginner to Pro',
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
