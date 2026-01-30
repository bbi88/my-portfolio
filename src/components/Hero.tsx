"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white dark:bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between"
        >
          {/* Profile Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-2 lg:order-1"
          >
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-slate-200 dark:border-zinc-800 bg-slate-100 dark:bg-zinc-900 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              {/* Placeholder for profile photo - replace with actual image */}
              <div className="flex h-full w-full items-center justify-center text-slate-500 dark:text-zinc-600">
                <span className="text-sm">Profile Photo</span>
              </div>
              {/* Uncomment and use when you have a profile photo:
              <Image
                src="/profile-photo.jpg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
              */}
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 text-center lg:order-2 lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 text-4xl font-light tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Building reliable digital products
              <br />
              <span className="font-normal">with modern technology.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-zinc-400 sm:text-xl lg:mx-0"
            >
              A dedicated Full-stack Developer focused on creating clean, functional, and user-centric web applications for international clients. Committed to transparent communication and continuous improvement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 rounded-full bg-slate-900 dark:bg-white px-8 py-4 text-base font-medium text-white dark:text-black transition-colors hover:bg-slate-800 dark:hover:bg-zinc-200"
              >
                Let's Discuss Your Project
                <ArrowDown className="h-4 w-4 rotate-[-90deg] transition-transform group-hover:translate-x-1" />
              </motion.a>
              
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full border border-slate-300 dark:border-zinc-800 bg-transparent px-8 py-4 text-base font-medium text-slate-900 dark:text-white transition-colors hover:border-slate-400 dark:hover:border-zinc-700 hover:bg-slate-100 dark:hover:bg-zinc-900"
              >
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-6 w-6 text-slate-500 dark:text-zinc-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
