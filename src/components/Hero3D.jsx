import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, Rocket } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          className="block"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradients that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(80,120,255,0.15),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/50 px-3 py-1 text-xs text-slate-300 backdrop-blur">
            <Rocket size={14} className="text-indigo-400" />
            <span>Software Engineer • Full Stack • Geospatial</span>
          </div>

          <h1 className="mt-6 text-3xl leading-tight font-semibold md:text-6xl text-white">
            Building APIs, maps, and delightful products
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400">with Python, FastAPI & PostGIS</span>
          </h1>

          <p className="mt-4 max-w-2xl text-slate-300 md:text-lg">
            I design and ship production-grade systems: RESTful APIs, automation pipelines, and spatial data platforms.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-white shadow hover:bg-indigo-400 transition"
            >
              <Rocket size={16} />
              View Projects
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
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700/60 bg-slate-900/60 px-4 py-2 text-slate-200 hover:bg-slate-800 transition"
            >
              <Mail size={16} />
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
