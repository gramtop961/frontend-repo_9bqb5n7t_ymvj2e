import React from 'react';
import Hero3D from './components/Hero3D';
import SkillsCloud from './components/SkillsCloud';
import ProjectShowcase from './components/ProjectShowcase';
import ContactSection from './components/ContactSection';
import { User } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top bar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/70 border-b border-slate-800/60">
        <div className="mx-auto max-w-6xl px-6 md:px-10 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-500/20">
              <User className="text-indigo-400" size={18} />
            </div>
            <span className="font-semibold">Full‑Stack • Python • Geospatial</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="space-y-16 md:space-y-24 p-4 md:p-6">
        <Hero3D />
        <SkillsCloud />
        <ProjectShowcase />
        <ContactSection />
      </main>

      <footer className="border-t border-slate-800/60 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} • Built with care — Python, FastAPI, PostgreSQL, PostGIS, and modern web.
      </footer>
    </div>
  );
}
