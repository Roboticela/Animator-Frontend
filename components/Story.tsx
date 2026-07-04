'use client';

import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const paragraphs = [
  {
    text: (
      <>
        It started with a simple frustration. We were building a game and needed to animate characters — walk
        cycles, idle poses, attack sequences — but every 3D animation tool we tried was either too complex, too
        expensive, or locked behind a subscription. We just wanted something clean, fast, and open.
      </>
    ),
    delay: 0.1,
  },
  {
    text: (
      <>
        That&apos;s when the idea for Animator was born. What if there was a lightweight, browser-first tool
        that let you import any 3D model, rig it with bones, drop in keyframes on a timeline, and export a
        finished animation — all without touching a massive DCC like Blender or Maya?
      </>
    ),
    delay: 0.15,
  },
  {
    text: (
      <>
        We wanted it to feel approachable. Indie developers, students, and hobbyists shouldn&apos;t need to spend
        weeks learning a professional tool just to make a character wave or walk. The goal was a 3D animator
        you could actually pick up in an afternoon.
      </>
    ),
    delay: 0.2,
  },
  {
    text: (
      <>
        We built it on React, Three.js, and Tauri so it could run in the browser and as a native desktop app
        without compromise. Procedural animation tracks let you generate motion algorithmically, and the
        reference viewport means you can animate against real footage without switching tools.
      </>
    ),
    delay: 0.25,
  },
  {
    text: (
      <>
        We made it free and open source under AGPL-3.0 because the best tools for creators should be
        available to everyone. If it saves one indie developer a subscription fee or helps one student land
        their first animation job, that&apos;s exactly what we set out to do.
      </>
    ),
    delay: 0.3,
  },
];

export default function Story() {
  return (
    <section id="story" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-card/40 border border-border/40 mb-6">
            <BookOpen className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            The Story Behind Animator
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            How a game dev frustration became a free tool for everyone
          </p>
        </motion.div>

        <motion.div
          className="bg-card/40 backdrop-blur-md rounded-xl p-6 sm:p-8 md:p-10 border border-border/40 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: paragraph.delay }}
              className="text-foreground/80 text-base md:text-lg leading-relaxed"
            >
              {paragraph.text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
