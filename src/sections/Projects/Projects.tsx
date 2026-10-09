
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  ArrowUpRight,
  Monitor,
  Play,
  Smartphone,
  X,
} from "lucide-react";
import {
  featuredProject,
  projects,
  type ProjectVideo,
} from "../../data/projects";

function ProjectImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => setFailed(false), [src]);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-[#30204f] via-[#151125] to-[#090714] text-violet-300 ${className}`}
      >
        <Monitor size={38} strokeWidth={1.3} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

export function Projects() {
  const reduceMotion = useReducedMotion();
  const [activeVideo, setActiveVideo] =
    useState<ProjectVideo | null>(null);

  useEffect(() => {
    if (!activeVideo) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onEscape);
    };
  }, [activeVideo]);

  const entrance = {
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: {
      duration: reduceMotion ? 0 : 0.55,
    },
  };

  return (
    <section
      id="projects"
      className="relative scroll-mt-20 overflow-hidden bg-background px-5 py-20 text-foreground lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-48 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div {...entrance} className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Mes réalisations
            </span>
          </div>

          <h2 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Mes{" "}
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              projets
            </span>
          </h2>

          <p className="text-muted">
            Découvrez une sélection de mes réalisations
            en développement Web et mobile.
          </p>
        </motion.div>

        <motion.article
          {...entrance}
          className="relative mb-4 overflow-hidden rounded-3xl border border-border-custom bg-surface/80"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-full w-2/3 bg-gradient-to-l from-accent/10 to-transparent"
          />

          <div className="relative grid items-center gap-8 p-6 lg:grid-cols-[0.85fr_1.15fr] lg:p-8">
            <div>
              <span className="mb-5 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-accent">
                ★ {featuredProject.category}
              </span>

              <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
                {featuredProject.title}
              </h3>

              <p className="mb-6 leading-7 text-muted">
                {featuredProject.description}
              </p>

              <div className="mb-6 grid gap-3 text-sm text-muted sm:grid-cols-2">
                {[
                  "Gestion des rondes d'inspection",
                  "Application mobile pour les équipes terrain",
                  "Suivi des équipements et anomalies",
                  "Tableau de bord administrateur",
                  "Planification des interventions",
                  "Authentification sécurisée",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-1 text-accent">
                      ✧
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mb-7 flex flex-wrap gap-2">
                {featuredProject.technologies.map(
                  (technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-accent/25 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent"
                    >
                      {technology}
                    </span>
                  )
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                {featuredProject.videos.map(
                  (video, index) => (
                    <button
                      key={video.src}
                      type="button"
                      onClick={() => setActiveVideo(video)}
                      className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                        index === 0
                          ? "bg-accent text-background hover:bg-accent-hover"
                          : "border border-border-custom bg-background text-foreground hover:border-accent/50"
                      }`}
                    >
                      <Play size={16} />
                      {index === 0
                        ? "Voir la démo Web"
                        : "Voir la démo Mobile"}
                      <ArrowUpRight size={15} />
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="relative min-w-0 pb-5">
              <div className="relative mr-5 rounded-2xl border border-accent/30 bg-[#080714] p-2 shadow-[0_20px_80px_rgba(139,92,246,0.18)] sm:mr-14">
                <div className="overflow-hidden rounded-lg bg-white">
                  <ProjectImage
                    src={featuredProject.cover.src}
                    alt={featuredProject.cover.alt}
                    className="aspect-[16/10] w-full object-cover object-top"
                  />
                </div>
              </div>

              <div
                aria-label="Aperçu de l'application mobile Flutter"
                className="absolute -bottom-2 right-0 w-[27%] min-w-[95px] max-w-[170px] rounded-[1.6rem] border-[5px] border-[#272333] bg-black p-1 shadow-[0_20px_50px_rgba(0,0,0,0.65)] sm:border-[7px]"
              >
                <div className="absolute left-1/2 top-2 z-10 h-2 w-12 -translate-x-1/2 rounded-full bg-black" />
                <div className="overflow-hidden rounded-[1rem] bg-[#f5faf4]">
                  <ProjectImage
                    src="/projects/kofert/mobile-shifts.png"
                    alt="Écran Flutter de sélection des équipes et shifts KOFERT"
                    className="aspect-[9/19] w-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 text-xs text-muted">
                <Monitor size={15} className="text-accent" />
                Dashboard Web
                <span className="mx-1">·</span>
                <Smartphone size={15} className="text-accent" />
                Flutter
              </div>
            </div>
          </div>
        </motion.article>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              {...entrance}
              whileHover={
                reduceMotion ? undefined : { y: -4 }
              }
              className="group grid min-w-0 grid-cols-[110px_minmax(0,1fr)] gap-4 overflow-hidden rounded-2xl border border-border-custom bg-surface/70 p-3 transition-colors hover:border-accent/50 sm:grid-cols-[145px_minmax(0,1fr)]"
            >
              <div className="overflow-hidden rounded-xl">
                <ProjectImage
                  src={project.cover.src}
                  alt={project.cover.alt}
                  className="h-full min-h-[145px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex min-w-0 flex-col py-1">
                <h3 className="mb-2 text-sm font-bold leading-snug sm:text-base">
                  {project.title}
                </h3>

                <p className="mb-3 text-xs leading-5 text-muted">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-accent/20 bg-accent/10 px-2 py-1 text-[10px] font-medium text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            role="presentation"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-lg"
            onClick={() => setActiveVideo(null)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label={activeVideo.title}
              className="w-full max-w-5xl rounded-2xl border border-border-custom bg-surface p-4 shadow-2xl sm:p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="text-base font-semibold sm:text-xl">
                  {activeVideo.title}
                </h3>
                <button
                  type="button"
                  autoFocus
                  onClick={() => setActiveVideo(null)}
                  aria-label="Fermer la démonstration"
                  className="rounded-lg border border-border-custom p-2 text-muted hover:text-foreground"
                >
                  <X size={21} />
                </button>
              </div>

              <video
                key={activeVideo.src}
                src={activeVideo.src}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="mx-auto max-h-[75vh] w-full rounded-xl bg-black object-contain"
              >
                Votre navigateur ne prend pas en charge
                la lecture vidéo HTML5.
              </video>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
