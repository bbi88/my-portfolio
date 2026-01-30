"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/constants";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="flex justify-center bg-white dark:bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-screen-2xl flex flex-col gap-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-4xl font-light tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
            My Projects
          </h2>
          <p className="mx-auto max-w-2xl text-center text-lg text-slate-600 dark:text-zinc-400">
            Selected work showcasing my approach to building reliable, quality solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 lg:gap-12"
        >
          {projects.map((project, index) => {
            const isLarge = index === 0 || index === 3;
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className={`group flex flex-col gap-2 relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md p-6 sm:p-8 lg:p-10 transition-all hover:border-slate-300/90 dark:hover:border-white/20 hover:bg-white/80 dark:hover:bg-zinc-950/80 shadow-sm dark:shadow-none ${
                  isLarge ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="mb-4 flex items-center">
                  <span className="translate-x-1 translate-y-1 rounded-full bg-slate-200/80 dark:bg-zinc-900 px-3 py-1 text-xs font-medium text-slate-600 dark:text-zinc-400">
                    {project.category}
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mb-6 text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-200 dark:bg-zinc-900 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ x: 4 }}
                  className="group/btn flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white transition-colors hover:text-slate-700 dark:hover:text-zinc-300"
                >
                  View Case Study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </motion.button>

                <div className="absolute inset-0 -z-10 bg-linear-to-br from-slate-200/50 dark:from-zinc-900/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
