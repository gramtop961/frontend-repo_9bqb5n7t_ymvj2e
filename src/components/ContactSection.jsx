import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Let’s build something great</h2>
        <p className="mt-2 text-slate-300">
          Have a project in mind — APIs, automation, or geospatial platforms? I’m open to collaborations and roles.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-white shadow hover:bg-emerald-400 transition"
          >
            <Send size={16} />
            Email me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700/60 bg-slate-900/60 px-4 py-2 text-slate-200 hover:bg-slate-800 transition"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700/60 bg-slate-900/60 px-4 py-2 text-slate-200 hover:bg-slate-800 transition"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          Prefer a direct link? hello@example.com
        </p>
      </div>
    </section>
  );
}
