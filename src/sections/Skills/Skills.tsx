
import { motion, useReducedMotion } from "motion/react";
import {
  Monitor,
  Smartphone,
  Server,
  Database,
  Code2,
  Wrench,
  type LucideIcon,
} from "lucide-react";

interface SkillCategory {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Développement d'interfaces web",
    icon: Monitor,
    skills: [
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "Mobile",
    description: "Développement d'applications mobiles",
    icon: Smartphone,
    skills: [
      "Flutter",
      "React Native",
      "Expo",
      "Android (Java)",
    ],
  },
  {
    title: "Backend",
    description: "Développement côté serveur",
    icon: Server,
    skills: [
      "Node.js",
      "ASP.NET Core",
      "Spring Boot",
    ],
  },
  {
    title: "Bases de données",
    description: "Gestion et stockage des données",
    icon: Database,
    skills: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    title: "Langages",
    description: "Langages de programmation",
    icon: Code2,
    skills: [
      "Java",
      "C",
      "C#",
      "JavaScript",
    ],
  },
  {
    title: "Outils & méthodes",
    description: "Technologies et méthodes de travail",
    icon: Wrench,
    skills: [
      "UML",
      "ERP",
      "Virtualisation",
      "Docker",
      "JWT",
    ],
  },
];

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative scroll-mt-20 overflow-hidden bg-background px-6 py-24 text-foreground lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-accent-secondary/5 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={
            reduceMotion ? false : { opacity: 0, y: 30 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-0.5 w-9 bg-accent" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Mon expertise technique
            </span>
          </div>

          <h2 className="mb-7 text-4xl font-bold tracking-tight sm:text-5xl">
            Mes{" "}
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              compétences
            </span>
          </h2>

          <p className="text-base leading-8 text-muted sm:text-lg">
            Technologies, langages et outils rencontrés
            au cours de mon parcours académique,
            de mes stages et de mes projets.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.title}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 25 }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion
                    ? 0
                    : (index % 3) * 0.08,
                }}
                className="group flex h-full flex-col rounded-2xl border border-border-custom bg-surface/70 p-7 transition-all duration-300 hover:border-accent/40 hover:bg-surface-hover"
              >
                <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-xl border border-accent/20 bg-accent/10">
                  <Icon
                    size={25}
                    className="text-accent"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {category.title}
                </h3>

                <p className="mb-6 text-sm leading-6 text-muted">
                  {category.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-accent/20 bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent transition-colors duration-300 group-hover:border-accent/30"
                    >
                      {skill}
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
