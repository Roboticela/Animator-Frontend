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
  'How to Export 3D Animations for Unity',
  'How to Export 3D Animations for Unreal Engine',
  'How to Export 3D Animations for Godot',
  'GLB vs GLTF vs FBX vs OBJ: Which 3D Format Should You Use?',
  'A Beginner\'s Guide to the 3D Viewport',
  'Understanding the Model Hierarchy Panel',
  'How to Use Reference Images and Video for Better Animation',
  'Texture Maps Explained: Albedo, Normal, Roughness, and Metallic',
  'Gizmo Controls 101: Translate, Rotate, Scale',
  'How Indie Game Developers Can Animate Characters Without a Big Studio Budget',
  'A Student\'s Guide to Learning 3D Animation for Free',
  'How Content Creators Can Animate 3D Assets for YouTube and Social Media',
  'Why Web Developers Need to Understand 3D Animation Pipelines',
  'How Teachers Can Use 3D Animation Tools in the Classroom',
  'Animator vs Blender: Which One Should You Choose?',
  'Animator vs Maya: A Simple Comparison for Beginners',
  'Animator vs Mixamo: Rigging and Animating Without Auto-Rigging',
  'Do You Need a Powerful Computer for 3D Animation?',
  'How to Rig a Humanoid Character From Scratch',
  'How to Animate an Idle Pose That Doesn\'t Look Robotic',
  'How to Build an Attack Animation for a Game Character',
  'Timeline Editor Tips and Tricks for Smoother Animation',
  'Common Beginner Mistakes in 3D Rigging (And How to Avoid Them)',
  'Parent-Child Bone Chains Explained Simply',
  'How to Animate Non-Humanoid Creatures (Animals, Monsters, Robots)',
  'The Difference Between Rigging and Animating',
  'How to Preview Your Animation in Real Time',
  'Multi-Format Export: How to Prepare Your Model for Any Game Engine',
  'Why Real-Time Viewports Changed 3D Animation Forever',
  'How to Animate a Run Cycle That Feels Natural',
  'What Is a Skeletal Rig and Why Every 3D Character Needs One',
  'How to Use Fullscreen Mode for Distraction-Free Animation',
  'Camera Controls in 3D Animation: Orbit, Zoom, and Reset Explained',
  'How to Animate Facial Expressions on a 3D Model',
  'Animating Props and Objects (Not Just Characters)',
  'How to Fix Jittery or Broken Animations',
  'Understanding Keyframe Timing and Spacing',
  'How to Animate a Jump or Fall Sequence',
  'Best Practices for Naming and Organizing Bones',
  'How to Build a Reusable Animation Library for Your Game',
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
