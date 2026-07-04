'use client';

import { motion } from 'framer-motion';
import { Monitor, Smartphone, Globe, type LucideIcon } from 'lucide-react';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const requirements: {
  category: string;
  icon: LucideIcon;
  iconColor: string;
  platforms: { name: string; specs: string[] }[];
}[] = [
  {
    category: 'Web Application',
    icon: Globe,
    iconColor: 'text-blue-500',
    platforms: [
      {
        name: 'Browser Requirements',
        specs: [
          'Chrome 90+, Firefox 88+, Safari 14+, or Edge 90+',
          'JavaScript enabled',
          'WebGL 2.0 support for 3D rendering',
          'Minimum 4 GB RAM recommended',
          'Stable internet connection',
          'Screen resolution: 1280×720 or higher',
        ],
      },
    ],
  },
  {
    category: 'Windows Desktop',
    icon: Monitor,
    iconColor: 'text-blue-600',
    platforms: [
      {
        name: 'Windows 10/11 (64-bit)',
        specs: [
          'CPU: Intel Core i5 or AMD equivalent (2.5 GHz+)',
          'RAM: 8 GB minimum, 16 GB recommended',
          'GPU: WebGL 2.0 compatible, 2 GB VRAM',
          'Storage: 500 MB available space',
          'Display: 1280×720 or higher',
        ],
      },
    ],
  },
  {
    category: 'macOS Desktop',
    icon: Monitor,
    iconColor: 'text-gray-600',
    platforms: [
      {
        name: 'macOS 11 (Big Sur) or later',
        specs: [
          'Apple Silicon (M1+) or Intel processor',
          'RAM: 8 GB minimum, 16 GB recommended',
          'GPU: Metal-compatible graphics',
          'Storage: 500 MB available space',
        ],
      },
    ],
  },
  {
    category: 'Linux Desktop',
    icon: Monitor,
    iconColor: 'text-orange-600',
    platforms: [
      {
        name: 'Ubuntu 20.04+ / Debian 11+ / Fedora 34+',
        specs: [
          'CPU: x86_64 architecture (64-bit)',
          'RAM: 8 GB minimum, 16 GB recommended',
          'WebKit2GTK 4.1+ and GTK 3.0+',
          'Storage: 500 MB available space',
          'Display Server: X11 or Wayland',
        ],
      },
    ],
  },
  {
    category: 'Android',
    icon: Smartphone,
    iconColor: 'text-green-600',
    platforms: [
      {
        name: 'Android 9.0 (Pie) or later',
        specs: [
          'ARM64 or x86_64 architecture',
          'RAM: 4 GB minimum, 6 GB recommended',
          'OpenGL ES 3.1+ for 3D rendering',
          'Storage: 300 MB available space',
        ],
      },
    ],
  },
  {
    category: 'iOS',
    icon: Smartphone,
    iconColor: 'text-indigo-600',
    platforms: [
      {
        name: 'iOS 14.0 or later',
        specs: [
          'iPhone 8 or newer / iPad (6th gen) or newer',
          'RAM: 3 GB minimum',
          'Storage: 300 MB available space',
          'Metal-compatible device',
        ],
      },
    ],
  },
];

export default function SystemRequirements() {
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
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">System Requirements</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Minimum specifications to run Animator smoothly
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {requirements.map((req, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className="bg-card/40 backdrop-blur-md rounded-xl p-6 border border-border/40 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border/40">
                <req.icon className={`w-8 h-8 ${req.iconColor}`} />
                <h3 className="text-xl font-bold text-foreground">{req.category}</h3>
              </div>
              <div className="space-y-4">
                {req.platforms.map((platform, pIndex) => (
                  <div key={pIndex}>
                    <h4 className="font-semibold text-foreground text-sm mb-3">{platform.name}</h4>
                    <ul className="space-y-2">
                      {platform.specs.map((spec, sIndex) => (
                        <li key={sIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1 text-xs">▪</span>
                          <span className="text-foreground/70 text-sm leading-relaxed">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="mt-12 text-center text-foreground/60 text-sm max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <strong>Note:</strong> These are minimum requirements. Performance improves significantly with a dedicated GPU and more RAM for complex scenes.
        </motion.p>
      </div>
    </section>
  );
}
