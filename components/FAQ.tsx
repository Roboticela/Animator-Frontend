'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { GITHUB_REPO } from '@/lib/constants';

const faqs = [
  {
    question: 'What is Animator?',
    answer:
      'Animator is a free, open-source 3D animation tool that lets you import 3D models, rig them with bones, animate on a keyframe timeline, and export to standard formats like GLB, FBX, and OBJ.',
  },
  {
    question: 'Which 3D file formats are supported?',
    answer:
      'You can import GLB/GLTF, FBX, OBJ with MTL, Collada (DAE), and STL files. Export is available for GLB, GLTF, FBX, and OBJ. More formats are planned for future releases.',
  },
  {
    question: 'Is Animator free?',
    answer:
      'Yes! It is completely free and open source under the AGPL-3.0 license. Download, use, and modify it freely — commercial use is allowed with license compliance.',
  },
  {
    question: 'Does my data get sent to any servers?',
    answer:
      'No. All processing happens locally on your device. Your 3D models, animations, and project files never leave your machine.',
  },
  {
    question: 'Can I use it for game development?',
    answer:
      'Absolutely. Export animated models as GLB or FBX and drop them directly into Unity, Unreal Engine, Godot, or any engine that supports standard formats.',
  },
  {
    question: 'Which platforms are supported?',
    answer:
      'Windows, macOS, Linux, Android, and iOS. Download the installer for your platform from the Downloads section or GitHub Releases.',
  },
  {
    question: 'What is the difference between the web and desktop app?',
    answer:
      'The web version runs in your browser — no install needed. The desktop app provides a native experience with file system access and better performance for large models.',
  },
  {
    question: 'Can I add procedural animations?',
    answer:
      'Yes. Animator includes a procedural animation system that lets you generate motion tracks algorithmically — ideal for walk cycles, idles, and other repeating motions without manual keyframing.',
  },
  {
    question: 'How do I contribute?',
    answer: `Visit the GitHub repository at ${GITHUB_REPO} to report issues, suggest features, or submit pull requests. All contributions are welcome!`,
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-card/40 backdrop-blur-md rounded-xl border border-border/40 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-accent/20 transition-colors"
      >
        <span className="font-semibold text-foreground pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-foreground/70 transition-transform flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-4"
        >
          <p className="text-foreground/70">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-foreground/70">Everything you need to know about Animator</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
