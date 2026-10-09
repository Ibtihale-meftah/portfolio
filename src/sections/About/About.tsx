
import { motion, useReducedMotion } from "motion/react";
import {
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  BookOpen,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Cycle ingénieur",
    description: "EMSI Casablanca · 2025–2027",
  },
  {
    icon: BookOpen,
    title: "Licence obtenue",
    description: "FST Mohammedia · 2025",
  },
  {
    icon: BriefcaseBusiness,
    title: "3 expériences",
    description: "OCP-KOFERT, FACIMAG, Eviosys",
  },
  {
    icon: Code2,
    title: "Frontend & Mobile",
    description: "Domaines de prédilection",
  },
];

export function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-background px-6 py-24 text-foreground lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-accent/5 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 35 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-0.5 w-9 bg-accent" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Découvrez mon parcours
            </span>
          </div>

          <h2 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl">
            À propos de{" "}
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              moi
            </span>
          </h2>

          <div className="space-y-5 text-base leading-8 text-muted sm:text-lg">
            <p>
              Actuellement étudiante en cycle ingénieur en
              Développement Digital et Systèmes
              d'Information à l'EMSI Casablanca, je suis
              particulièrement intéressée par le
              développement d'applications web et mobiles.
            </p>

            <p>
              Avant d'intégrer l'EMSI, j'ai obtenu une{" "}
              <strong className="font-semibold text-foreground">
                Licence en Mathématiques, Informatique
                et Sciences des données à la FST
                Mohammedia en 2025
              </strong>
              , après un DEUST en Mathématiques,
              Informatique et Physique.
            </p>

            <p>
              Mes expériences professionnelles chez{" "}
              <strong className="font-semibold text-foreground">
                OCP-KOFERT, FACIMAG et Eviosys
              </strong>{" "}
              m'ont permis de découvrir différents
              environnements techniques et de développer
              mes connaissances à travers des projets
              concrets.
            </p>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 25 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.1,
                }}
                className="group rounded-2xl border border-border-custom bg-surface/70 p-6 transition-colors duration-300 hover:border-accent/40 hover:bg-surface-hover"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10">
                  <Icon
                    size={23}
                    className="text-accent"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
