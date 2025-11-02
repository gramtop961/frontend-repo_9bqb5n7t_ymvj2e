import React from 'react';

const skills = [
  'Software Engineering',
  'Full Stack Development',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'PostGIS',
  'API Design',
  'Automation',
  'Geospatial',
  'React',
  'Node.js',
  'Docker',
  'CI/CD',
  'AWS',
  'Data Modeling',
  'OpenAPI/Swagger',
];

export default function SkillsCloud() {
  return (
    <section id="skills" className="relative py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Core skills</h2>
        <p className="mt-2 text-slate-300">From backend systems to interactive maps, this is my toolbox.</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((s) => (
            <span
              key={s}
              className="inline-flex items-center rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 text-sm text-slate-200 hover:bg-slate-800 transition"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-0 top-1/2 h-[40%] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.10),transparent_60%)]" />
    </section>
  );
}
