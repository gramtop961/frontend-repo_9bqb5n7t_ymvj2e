import React from 'react';
import { Map, Server, Workflow } from 'lucide-react';

const projects = [
  {
    title: 'GeoAPI Platform',
    icon: <Map className="text-sky-400" size={20} />,
    description:
      'A FastAPI + PostGIS platform for spatial queries (isochrones, nearest features, tile endpoints) with OpenAPI documentation.',
    tags: ['FastAPI', 'PostGIS', 'PostgreSQL', 'GeoJSON', 'Docker'],
    links: {
      demo: '#',
      code: '#',
    },
  },
  {
    title: 'Automation Pipelines',
    icon: <Workflow className="text-emerald-400" size={20} />,
    description:
      'Event-driven jobs for ETL, validation, and dataset versioning with robust logging and alerts.',
    tags: ['Python', 'Airflow', 'CI/CD', 'S3', 'Pandas'],
    links: {
      demo: '#',
      code: '#',
    },
  },
  {
    title: 'API Design System',
    icon: <Server className="text-indigo-400" size={20} />,
    description:
      'Well-structured REST APIs with pagination, filtering, and auth. Generated clients via OpenAPI.',
    tags: ['OpenAPI', 'FastAPI', 'JWT', 'Rate limiting', 'Testing'],
    links: {
      demo: '#',
      code: '#',
    },
  },
];

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Selected work</h2>
        <p className="mt-2 text-slate-300">A snapshot of things I enjoy building.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-xl border border-slate-700/60 bg-slate-900/60 p-5 backdrop-blur hover:border-slate-600 hover:bg-slate-900 transition"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-slate-800/70">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-slate-800/70 px-2 py-1 text-xs text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <a
                  href={p.links.demo}
                  className="rounded-md bg-indigo-500 px-3 py-1.5 text-sm text-white hover:bg-indigo-400 transition"
                >
                  Demo
                </a>
                <a
                  href={p.links.code}
                  className="rounded-md border border-slate-700/60 px-3 py-1.5 text-sm text-slate-200 hover:bg-slate-800 transition"
                >
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
