"use client";

import { motion } from "framer-motion";
import { Code, Server, Layers, Palette, MessagesSquare } from "lucide-react";
import { expertise } from "@/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Server,
  Layers,
  Palette,
  MessagesSquare 
};

export default function Expertise() {
  return (
    <section id="expertise" className="flex justify-center w-full bg-white dark:bg-black px-4 py-40 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-screen-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-4xl font-light tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
            My Expertise
          </h2>
          <p className="mx-auto max-w-2xl text-center text-lg text-slate-600 dark:text-zinc-400">
            Technologies and skills I use to build reliable, quality solutions
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 sm:gap-10 lg:gap-12">
          {expertise.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl flex flex-col gap-2 border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md p-6 sm:p-8 lg:p-10 transition-all hover:border-slate-300/90 dark:hover:border-white/20 hover:bg-white/80 dark:hover:bg-zinc-950/80 shadow-sm dark:shadow-none"
              >
                <div className="mb-4 inline-flex rounded-lg bg-slate-200 dark:bg-zinc-900 p-3 text-slate-700 dark:text-white transition-colors group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mb-4 text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex gap-3 justify-center flex-wrap">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-100 dark:bg-zinc-900 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
