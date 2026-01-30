"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { processSteps } from "@/constants";

export default function Process() {
  return (
    <section id="workflow" className="flex justify-center bg-slate-50 dark:bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-4xl font-light tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
            My Workflow
          </h2>
          <p className="mx-auto max-w-2xl text-center text-lg text-slate-600 dark:text-zinc-400">
            My commitment to transparent communication and quality results throughout every project
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 lg:block">
            <div className="h-full w-0.5 bg-gradient-to-b from-slate-300 dark:from-zinc-800 via-slate-400 dark:via-zinc-700 to-slate-300 dark:to-zinc-800" />
          </div>

          {/* Mobile timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 h-full w-0.5 bg-gradient-to-b from-slate-300 dark:from-zinc-800 via-slate-400 dark:via-zinc-700 to-slate-300 dark:to-zinc-800 lg:hidden" />

          <div className="space-y-10 sm:space-y-12 lg:space-y-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col items-start pl-16 sm:pl-20 lg:flex-row lg:items-center lg:pl-0 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Mobile timeline dot */}
                <div className="absolute left-0 top-0 z-10 -translate-x-1/2 lg:hidden">
                  <div className="rounded-full border-4 border-slate-50 dark:border-black bg-slate-700 dark:bg-zinc-800 p-2">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Desktop timeline dot */}
                <div className="absolute left-1/2 z-10 hidden -translate-x-1/2 lg:block">
                  <div className="rounded-full border-4 border-slate-50 dark:border-black bg-slate-700 dark:bg-zinc-800 p-2">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? "lg:pr-12" : "lg:pl-12 lg:text-right"
                  }`}
                >
                  <div className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md p-6 sm:p-8 lg:p-10 transition-all hover:border-slate-300/90 dark:hover:border-white/20 hover:bg-white/80 dark:hover:bg-zinc-950/80 shadow-sm dark:shadow-none">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 dark:bg-white text-sm font-semibold text-white dark:text-black">
                        {step.step}
                      </span>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-slate-600 dark:text-zinc-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden w-2/12 lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
