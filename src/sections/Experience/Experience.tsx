
import { motion, useReducedMotion } from "motion/react";
import {
  BriefcaseBusiness,
  CalendarDays,
  Cloud,
  Factory,
  MapPin,
} from "lucide-react";

const experiences = [
  {
    company: "OCP-KOFERT",
    role: "Stage PFA — Développement Web & Mobile",
    period: "Du 01 juillet 2026 au 31 Aout 2026 · 2 mois",
    location: "Maroc",
    description:
      "Conception et développement de KOFERT Inspection Platform, une solution Web & Mobile de digitalisation des rondes d'inspection industrielles.",
    missions: [
      "Développement d'une interface Web d'administration avec React.",
      "Développement d'une application mobile Flutter pour les équipes terrain.",
      "Gestion des rondes, inspections, équipements et anomalies.",
      "Intégration du backend Spring Boot et de PostgreSQL.",
    ],
    technologies: [
      "React",
      "Flutter",
      "Spring Boot",
      "PostgreSQL",
      "JWT",
      "Docker",
    ],
    icon: Factory,
  },
  {
    company: "FACIMAG",
    role: "Stage d'été",
    period: "Juin 2025 · 1 mois",
    location: "Maroc",
    description:
      "Découverte et participation aux processus de gestion des stocks de production et aux opérations administratives de l'entreprise.",
    missions: [
      "Utilisation du logiciel Cegid pour la gestion des stocks.",
      "Validation des bons d'achat et de vente.",
      "Contrôle des données internes de l'entreprise.",
    ],
    technologies: [
      "Cegid",
      "Gestion des stocks",
      "Processus métier",
    ],
    icon: BriefcaseBusiness,
  },
  {
    company: "Eviosys — a Sonoco Company",
    role: "Stage d'observation",
    period: "Mai 2025 · 1 mois",
    location: "Casablanca, Maroc",
    description:
      "Étude et recherche sur le Cloud Computing afin de mieux comprendre ses concepts, ses technologies et son rôle dans les environnements informatiques modernes.",
    missions: [
      "Étude des fondamentaux du Cloud Computing.",
      "Exploration des technologies et services cloud.",
      "Analyse des modèles de déploiement.",
      "Étude des avantages des solutions cloud pour les organisations.",
    ],
    technologies: [
      "Cloud Computing",
      "Cloud Services",
      "Modèles de déploiement",
    ],
    icon: Cloud,
  },
];

export function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative scroll-mt-20 overflow-hidden bg-background px-6 py-24 text-foreground lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 30 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: reduceMotion ? 0 : 0.65 }}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-0.5 w-9 bg-accent" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Mon parcours professionnel
            </span>
          </div>

          <h2 className="mb-7 text-4xl font-bold tracking-tight sm:text-5xl">
            Mes{" "}
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              expériences
            </span>
          </h2>

          <p className="text-base leading-8 text-muted sm:text-lg">
            Découvrez les expériences qui m'ont permis
            d'explorer différents environnements professionnels
            et de développer mes compétences techniques.
          </p>
        </motion.div>

        <div className="relative space-y-7 border-l border-accent/25 pl-6 sm:pl-10">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <motion.article
                key={experience.company}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 30 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                className="relative rounded-2xl border border-border-custom bg-surface/70 p-6 transition-colors duration-300 hover:border-accent/40 sm:p-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[31px] top-10 h-3 w-3 rounded-full border-2 border-accent bg-background sm:-left-[47px]"
                />

                <div className="mb-6 flex flex-wrap items-start justify-between gap-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                      <Icon size={23} aria-hidden="true" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold sm:text-2xl">
                        {experience.company}
                      </h3>
                      <p className="mt-2 font-medium text-accent">
                        {experience.role}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-muted">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} aria-hidden="true" />
                      {experience.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} aria-hidden="true" />
                      {experience.location}
                    </div>
                  </div>
                </div>

                <p className="mb-6 max-w-4xl leading-8 text-muted">
                  {experience.description}
                </p>

                <ul className="mb-7 grid gap-3 md:grid-cols-2">
                  {experience.missions.map((mission) => (
                    <li
                      key={mission}
                      className="flex items-start gap-3 text-sm leading-6 text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {mission}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 border-t border-border-custom pt-6">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
