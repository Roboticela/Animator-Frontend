'use client';

import { motion } from 'framer-motion';
import { Gamepad2, GraduationCap, Video, Code2, Users, Heart, type LucideIcon } from 'lucide-react';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const useCases: { icon: LucideIcon; title: string; description: string; color: string }[] = [
  {
    icon: Gamepad2,
    title: 'Game Developers',
    description:
      'Rig characters, create walk and run cycles, and export GLB/FBX animations directly into Unity, Unreal, or Godot.',
    color: 'text-blue-500',
  },
  {
    icon: GraduationCap,
    title: 'Students & Learners',
    description:
      'Learn 3D animation principles in a lightweight tool without needing expensive software or long setup times.',
    color: 'text-purple-500',
  },
  {
    icon: Video,
    title: 'Content Creators',
    description:
      'Animate 3D assets for YouTube, social media, or presentations. Export to web-friendly formats in seconds.',
    color: 'text-orange-500',
  },
  {
    icon: Code2,
    title: 'Web & App Developers',
    description:
      'Produce GLTF animations for Three.js, Babylon.js, or any WebGL project without leaving a web-first workflow.',
    color: 'text-green-500',
  },
  {
    icon: Users,
    title: 'Educators & Instructors',
    description:
      'Demonstrate rigging and animation concepts in a class or workshop using a tool anyone can access for free.',
    color: 'text-pink-500',
  },
  {
    icon: Heart,
    title: '3D Enthusiasts',
    description:
      'Explore rigging and animation just for fun. No subscription, no account, no limits on what you create.',
    color: 'text-red-500',
  },
];

export default function UseCases() {
  return (
    <section className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Perfect For Everyone</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            From game studios to classrooms — Animator adapts to your workflow
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              whileHover={{ scale: 1.02 }}
              className="bg-card/40 backdrop-blur-md rounded-xl p-6 border border-border/40 hover:border-primary/40 transition-all duration-300 h-full"
            >
              <useCase.icon className={`w-12 h-12 mb-4 ${useCase.color}`} />
              <h3 className="text-xl font-semibold text-foreground mb-2">{useCase.title}</h3>
              <p className="text-foreground/70">{useCase.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
