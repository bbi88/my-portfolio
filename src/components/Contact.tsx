"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    budget: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      company: "",
      budget: "",
      description: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="bg-white dark:bg-black flex justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-screen-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-4xl font-light tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
            Let's Discuss Your Project 1-on-1
          </h2>
          <p className="mx-auto max-w-2xl text-center text-lg text-slate-600 dark:text-zinc-400">
            Share your project details and I'll get back to you within 24 hours. I value clear communication and will respond personally to every inquiry.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-600 dark:text-zinc-300"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-zinc-500 transition-colors focus:border-slate-500 dark:focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-slate-500 dark:focus:ring-zinc-700"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="mb-2 block text-sm font-medium text-slate-600 dark:text-zinc-300"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-zinc-500 transition-colors focus:border-slate-500 dark:focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-slate-500 dark:focus:ring-zinc-700"
                placeholder="Acme Inc."
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="budget"
              className="mb-2 block text-sm font-medium text-slate-600 dark:text-zinc-300"
            >
              Budget Range *
            </label>
            <select
              id="budget"
              name="budget"
              required
              value={formData.budget}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 px-4 py-3 text-slate-900 dark:text-white transition-colors focus:border-slate-500 dark:focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-slate-500 dark:focus:ring-zinc-700"
            >
              <option value="">Select a range</option>
              <option value="under-25k">Under $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="100k-250k">$100,000 - $250,000</option>
              <option value="over-250k">Over $250,000</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium text-slate-600 dark:text-zinc-300"
            >
              Project Description *
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={3}
              value={formData.description}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-zinc-500 transition-colors focus:border-slate-500 dark:focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-slate-500 dark:focus:ring-zinc-700"
                placeholder="Tell me about your project goals, timeline, and any specific requirements..."
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 dark:bg-white px-8 py-4 text-base font-medium text-white dark:text-black transition-colors hover:bg-slate-800 dark:hover:bg-zinc-200 sm:w-auto"
          >
            Send Message
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
