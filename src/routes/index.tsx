import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

type Project = {
  name: string;
  descriptor: string;
  tags: string[];
  status?: string;
  body: string;
  link?: { href: string; label: string };
};

const projects: Project[] = [
  {
    name: "Cardiology AI Agent",
    descriptor:
      "Conversational health agent with LLM backend — Anatolia × AUTH joint project",
    tags: ["Python", "LLM APIs", "NLP", "Healthcare AI"],
    status: "IN PROGRESS",
    body: "Building the LLM backend for a conversational AI health assistant developed jointly by American College of Thessaloniki and Aristotle University. The agent handles patient-facing dialogue in a cardiology context. Focused on prompt engineering, retrieval pipelines, and safe output handling.",
  },
  {
    name: "NorthEuraLex Language Classifier",
    descriptor: "MLP model classifying 5 languages from phonological data",
    tags: ["Python", "scikit-learn", "NLP", "ML"],
    body: "Trained a multi-layer perceptron on the NorthEuraLex dataset to classify Croatian, Greek, Turkish, Russian, and German from lexical features. Achieved 95.6% accuracy. Explored cross-linguistic phonological patterns as part of an AI/ML course project.",
  },
  {
    name: "Homelab & Automation Infrastructure",
    descriptor:
      "Self-hosted Proxmox cluster with AI agents, CRM, and remote access",
    tags: ["Proxmox", "Linux", "Node.js", "Tailscale", "Self-hosting"],
    body: "Running a personal Proxmox VE homelab hosting an AI agent pipeline (OpenClaw), personal CRM with Telegram briefings, Immich photo archive, and a Minecraft server. Managed via Tailscale for remote access. Built and debugged from scratch including LXC networking and DNS resolution.",
  },
  {
    name: "velkovski.xyz",
    descriptor: "Personal site — Astro, Cloudflare Pages",
    tags: ["Astro", "Cloudflare", "HTML/CSS"],
    link: { href: "https://velkovski.xyz", label: "velkovski.xyz" },
    body: "This site. Rebuilt from scratch for Voxxed Days Thessaloniki 2026. Fast, static, no frameworks bloat.",
  },
];

const experience = [
  {
    role: "LLM Backend Engineer",
    org: "Anatolia × AUTH Cardiology Project",
    meta: "Aug 2026 – present · Thessaloniki",
    body: "Owning the LLM backend for a patient-facing cardiology assistant. Prompt architecture, retrieval, evaluation, and safety guardrails.",
  },
  {
    role: "SGA President",
    org: "American College of Thessaloniki",
    meta: "2026–27 · Thessaloniki",
    body: "Elected to lead the Student Government Association. Representing students to administration, running weekly cabinet, and shipping campus initiatives.",
  },
  {
    role: "Junior Graphic Designer",
    org: "Brainster & Freelance (Upwork)",
    meta: "Jun 2023 – Aug 2024 · Remote",
    body: "Delivered brand, social, and print work for education clients and freelance customers on Upwork. Learned to ship on tight briefs with direct client feedback.",
  },
  {
    role: "Barista & Bartender",
    org: "Dolap Cafe & Makka Bar",
    meta: "Jun 2025 – Sep 2025 · Skopje",
    body: "Full seasonal shifts across café and cocktail bar service. Speed, composure under load, and a working eye for how a small business actually runs.",
  },
];

const skillsRow = [
  "AI & LLM",
  "Python",
  "NLP",
  "Proxmox",
  "Linux",
  "Node.js",
  "Astro",
  "C# / .NET",
  "Git",
  "Cloudflare",
  "Systems Administration",
  "Self-hosting",
];

const languages = [
  ["Macedonian", "Native"],
  ["English", "C1"],
  ["Greek", "A2"],
  ["German", "B1"],
  ["Serbian", "B2"],
  ["Croatian", "A2"],
];

function Nav() {
  const items = [
    ["Now", "#now"],
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#top"
          className="font-display text-sm font-bold tracking-widest"
          style={{ color: "var(--accent)" }}
        >
          PV
        </a>
        <nav className="hidden gap-6 text-xs uppercase tracking-widest text-[color:var(--muted)] md:flex">
          {items.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="transition-colors duration-200 hover:text-[color:var(--fg)]"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span
        className="h-px w-8"
        style={{ background: "var(--accent)" }}
        aria-hidden
      />
      <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--muted)]">
        {children}
      </span>
    </div>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl px-5 py-24 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
}

function Accordion({
  title,
  meta,
  descriptor,
  tags,
  status,
  body,
  link,
}: {
  title: string;
  meta?: string;
  descriptor?: string;
  tags?: string[];
  status?: string;
  body: string;
  link?: { href: string; label: string };
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-[color:var(--line)] py-6">
      <button
        onClick={() => setOpen((o) => !o)}
        className="group flex w-full flex-col gap-2 text-left"
        aria-expanded={open}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="font-display text-2xl font-bold leading-tight md:text-3xl">
            {title}
          </h3>
          <span
            className="font-display text-xs uppercase tracking-widest text-[color:var(--muted)] transition-colors duration-200 group-hover:text-[color:var(--accent)]"
            aria-hidden
          >
            {open ? "Close −" : "Expand ↓"}
          </span>
        </div>
        {meta && (
          <div className="text-sm text-[color:var(--muted)]">{meta}</div>
        )}
        {descriptor && (
          <p className="max-w-3xl text-base text-[color:var(--fg)]/85">
            {descriptor}
          </p>
        )}
        {(tags || status) && (
          <div className="mt-1 flex flex-wrap items-center gap-2">
            {status && (
              <span
                className="rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest"
                style={{
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                }}
              >
                {status}
              </span>
            )}
            {tags?.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[color:var(--line)] px-2.5 py-0.5 text-[11px] text-[color:var(--muted)]"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 ease-out ${
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <p className="max-w-3xl text-[color:var(--fg)]/80">{body}</p>
          {link && (
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm underline decoration-[color:var(--accent)] underline-offset-4 transition-colors duration-200 hover:text-[color:var(--accent)]"
            >
              {link.label} ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Pill({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-full border border-[color:var(--line)] px-4 py-1.5 text-xs uppercase tracking-widest text-[color:var(--fg)] transition-colors duration-200 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
    >
      {children}
    </a>
  );
}

function Index() {
  return (
    <div id="top" className="relative min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="relative flex min-h-[100dvh] w-full items-center">
        <div className="mx-auto w-full max-w-6xl px-5 pt-28">
          <h1
            className="font-display font-bold uppercase leading-[0.85] tracking-[-0.02em]"
            style={{ fontSize: "clamp(3.5rem, 14.5vw, 15rem)" }}
          >
            Petar
            <br />
            Velkovski
          </h1>
          <p className="mt-8 text-base text-[color:var(--muted)] md:text-xl">
            <span className="text-[color:var(--fg)]">LLM Backend</span>
            <span className="mx-2 text-[color:var(--accent)]">·</span>
            AI Systems
            <span className="mx-2 text-[color:var(--accent)]">·</span>
            Thessaloniki
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Pill href="https://github.com/peeetar">GitHub</Pill>
            <Pill href="https://linkedin.com/in/velkovskipetar">LinkedIn</Pill>
          </div>
        </div>
        <a
          href="#now"
          aria-label="Scroll to content"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[color:var(--muted)] transition-colors duration-200 hover:text-[color:var(--accent)]"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="animate-bounce"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </section>

      {/* NOW */}
      <Section id="now">
        <Eyebrow>Now</Eyebrow>
        <p className="font-display text-2xl leading-snug md:text-4xl">
          Building the LLM backend for a conversational AI health agent —{" "}
          <span style={{ color: "var(--accent)" }}>
            Anatolia × AUTH Cardiology Project
          </span>{" "}
          (Aug 2026 – present).
        </p>
        <p className="mt-6 max-w-3xl text-lg text-[color:var(--muted)] md:text-xl">
          SGA President, American College of Thessaloniki (2026–27).
        </p>
      </Section>

      {/* PROJECTS */}
      <Section id="projects">
        <Eyebrow>Projects</Eyebrow>
        <div>
          {projects.map((p) => (
            <Accordion
              key={p.name}
              title={p.name}
              descriptor={p.descriptor}
              tags={p.tags}
              status={p.status}
              body={p.body}
              link={p.link}
            />
          ))}
          <div className="border-t border-[color:var(--line)]" />
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills">
        <Eyebrow>Skills</Eyebrow>
        <div
          className="font-display font-bold leading-[0.95] tracking-[-0.02em]"
          style={{ fontSize: "clamp(2rem, 7vw, 6rem)" }}
        >
          {skillsRow.map((s, i) => (
            <span key={s} className="inline">
              <span
                className={
                  i % 3 === 1
                    ? "text-[color:var(--muted)]"
                    : "text-[color:var(--fg)]"
                }
              >
                {s}
              </span>
              {i < skillsRow.length - 1 && (
                <span className="mx-3 text-[color:var(--accent)]">·</span>
              )}{" "}
            </span>
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-6 font-display text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--muted)]">
            Languages
          </div>
          <div className="flex flex-wrap gap-2.5">
            {languages.map(([lang, level]) => (
              <span
                key={lang}
                className="rounded-full border border-[color:var(--line)] px-4 py-2 text-sm"
              >
                <span className="font-medium">{lang}</span>
                <span className="mx-2 text-[color:var(--muted)]">—</span>
                <span className="text-[color:var(--muted)]">{level}</span>
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience">
        <Eyebrow>Experience</Eyebrow>
        <div>
          {experience.map((e) => (
            <Accordion
              key={e.role + e.org}
              title={e.role}
              descriptor={e.org}
              meta={e.meta}
              body={e.body}
            />
          ))}
          <div className="border-t border-[color:var(--line)]" />
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education">
        <Eyebrow>Education</Eyebrow>
        <div className="border-t border-[color:var(--line)] py-6">
          <h3 className="font-display text-2xl font-bold md:text-3xl">
            American College of Thessaloniki{" "}
            <span className="text-[color:var(--muted)]">(ACT / Anatolia)</span>
          </h3>
          <p className="mt-2 text-[color:var(--muted)]">
            BSc Business Computing · GPA 3.7 / 4.0 · Expected Jun 2028
          </p>
          <p className="mt-4 text-sm text-[color:var(--muted)]">
            Authorized to work in Greece · Oct 2026
          </p>
        </div>
        <div className="border-t border-[color:var(--line)]" />
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <Eyebrow>Contact</Eyebrow>
        <h2
          className="font-display font-bold leading-[0.9] tracking-[-0.02em]"
          style={{ fontSize: "clamp(2.75rem, 10vw, 9rem)" }}
        >
          Let's work
          <br />
          together<span style={{ color: "var(--accent)" }}>.</span>
        </h2>
        <div className="mt-10 space-y-4">
          <a
            href="mailto:petar@velkovski.xyz"
            className="inline-block text-xl underline decoration-[color:var(--accent)] underline-offset-8 transition-colors duration-200 hover:text-[color:var(--accent)] md:text-2xl"
          >
            petar@velkovski.xyz
          </a>
          <div className="flex flex-wrap gap-3 pt-2">
            <Pill href="https://linkedin.com/in/velkovskipetar">LinkedIn</Pill>
            <Pill href="https://github.com/peeetar">GitHub</Pill>
          </div>
          <p className="max-w-2xl pt-6 text-sm text-[color:var(--muted)]">
            Available for internships, part-time roles, and project
            collaborations in Thessaloniki and remote.
          </p>
        </div>
      </Section>

      <footer className="mx-auto max-w-6xl border-t border-[color:var(--line)] px-5 py-8 text-xs text-[color:var(--muted)]">
        © {new Date().getFullYear()} Petar Velkovski · Thessaloniki
      </footer>
    </div>
  );
}
