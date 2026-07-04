'use client';

import { motion } from 'framer-motion';
import {
  Box,
  Timer,
  Layers,
  Zap,
  FileOutput,
  Palette,
  Move3D,
  Eye,
  Maximize2,
  type LucideIcon,
} from 'lucide-react';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const features = [
  {
    icon: Box,
    title: 'Bone Rigging System',
    description:
      'Build full skeletal rigs with parent-child bone chains. Select, transform, and manage bones in an intuitive 3D viewport.',
    color: 'text-blue-500',
  },
  {
    icon: Timer,
    title: 'Keyframe Timeline',
    description:
      'Create, edit, and scrub keyframes on a multi-track timeline. Precisely control every aspect of your animation timing.',
    color: 'text-cyan-500',
  },
  {
    icon: Zap,
    title: 'Procedural Animations',
    description:
      'Generate and tweak procedural motion tracks for walk cycles, idles, and other repeating motions without manual keyframing.',
    color: 'text-green-500',
  },
  {
    icon: Layers,
    title: 'Model Hierarchy Panel',
    description:
      'Visualize and navigate the full scene graph. Select bones and meshes from a clean, collapsible tree view.',
    color: 'text-purple-500',
  },
  {
    icon: Eye,
    title: 'Reference Viewport',
    description:
      'Import reference images or video frames to animate against. Keep reference and 3D views side by side.',
    color: 'text-orange-500',
  },
  {
    icon: Palette,
    title: 'Texture Map Support',
    description:
      'Load and preview albedo, normal, roughness, and metallic maps directly on your models in the 3D viewport.',
    color: 'text-pink-500',
  },
  {
    icon: FileOutput,
    title: 'Multi-Format Export',
    description:
      'Export animated models as GLB, GLTF, FBX, OBJ, and more. Compatible with Unity, Unreal, Blender, and any modern pipeline.',
    color: 'text-teal-500',
  },
  {
    icon: Move3D,
    title: 'Gizmo Controls',
    description:
      'Use translation, rotation, and scale gizmos in the 3D viewport for precise bone and object manipulation.',
    color: 'text-indigo-500',
  },
  {
    icon: Maximize2,
    title: 'Fullscreen & Viewport Controls',
    description:
      'Enter immersive fullscreen mode, orbit the camera, zoom, and reset view angles with a single click.',
    color: 'text-amber-500',
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <motion.div
      variants={itemAnimation}
      whileHover={{ scale: 1.02 }}
      className="bg-card/40 backdrop-blur-md rounded-xl p-6 border border-border/40 hover:border-primary/40 transition-all duration-300"
    >
      <div className={`${color} mb-4`}>
        <Icon className="w-12 h-12" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Powerful Features</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Everything you need to rig, animate, and export 3D models
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
