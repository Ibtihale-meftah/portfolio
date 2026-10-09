
import { motion, useReducedMotion } from "motion/react";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "ibtihalmeftah.120@gmail.com",
    href: "mailto:ibtihalmeftah.120@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Ibtihale Meftah",
    href: "https://www.linkedin.com/in/ibtihale-meftah-84b0b322a/",
    icon: BriefcaseBusiness,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/Ibtihale-meftah",
    href: "https://github.com/Ibtihale-meftah",
    icon: Code2,
    external: true,
  },
];

export function Contact() {
  const reduceMotion = useReducedMotion();

  const animation = {
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 30 },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.15,
    },

    transition: {
      duration: reduceMotion ? 0 : 0.65,
    },
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-background px-6 py-24 text-foreground lg:py-32"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          {...animation}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-0.5 w-9 bg-accent" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Restons en contact
            </span>
          </div>

          <h2 className="mb-7 text-4xl font-bold tracking-tight sm:text-5xl">
            Contactez-{" "}
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              moi
            </span>
          </h2>

          <p className="text-base leading-8 text-muted sm:text-lg">
            Une opportunité de stage, un projet ou simplement
            une envie d'échanger ? N'hésitez pas à me contacter.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT — Contact information */}
          <motion.div
            {...animation}
            className="rounded-3xl border border-border-custom bg-surface/70 p-6 sm:p-8"
          >
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                <Sparkles
                  size={23}
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Mes coordonnées
                </h3>

                <p className="mt-1 text-sm text-muted">
                  Retrouvez-moi sur mes réseaux professionnels.
                </p>
              </div>
            </div>

            {/* Contact links */}
            <div className="space-y-4">
              {contactLinks.map((contact) => {
                const Icon = contact.icon;

                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={
                      contact.external
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      contact.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex min-w-0 items-center gap-4 rounded-2xl border border-border-custom bg-background/60 p-4 transition-all duration-300 hover:border-accent/50 hover:bg-accent/5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                      <Icon
                        size={21}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="mb-1 text-xs text-muted">
                        {contact.label}
                      </p>

                      <p className="break-all text-sm font-semibold text-foreground sm:break-normal">
                        {contact.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={19}
                      aria-hidden="true"
                      className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                    />
                  </a>
                );
              })}
            </div>

            {/* Location */}
            <div className="mt-7 flex items-center gap-3 border-t border-border-custom pt-6 text-sm text-muted">
              <MapPin
                size={18}
                className="text-accent"
                aria-hidden="true"
              />

              Casablanca, Maroc
            </div>
          </motion.div>

          {/* RIGHT — Internship availability */}
          <motion.div
            {...animation}
            className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-accent/25 bg-surface p-6 sm:p-8"
          >
            {/* Decorative glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-[80px]"
            />

            <div className="relative">
              {/* Availability badge */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent">
                <CheckCircle2
                  size={16}
                  aria-hidden="true"
                />

                Disponible pour un stage PFE
              </div>

              <h3 className="mb-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Travaillons{" "}
                <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                  ensemble.
                </span>
              </h3>

              <p className="mb-8 max-w-lg text-base leading-8 text-muted">
                Je recherche un stage de Projet de Fin
                d'Études d'une durée de 6 mois, à partir
                de février 2027, dans le développement
                frontend et mobile.
              </p>

              {/* Internship details */}
              <div className="mb-10 space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted">
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-accent"
                    aria-hidden="true"
                  />

                  Début souhaité : février 2027
                </div>

                <div className="flex items-center gap-3 text-sm text-muted">
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-accent"
                    aria-hidden="true"
                  />

                  Durée : 6 mois
                </div>

                <div className="flex items-center gap-3 text-sm text-muted">
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-accent"
                    aria-hidden="true"
                  />

                  Domaines : Frontend & Mobile
                </div>
              </div>
            </div>

            {/* Email CTA */}
            <a
              href="mailto:ibtihalmeftah.120@gmail.com?subject=Opportunit%C3%A9%20de%20stage%20PFE"
              className="relative inline-flex w-full items-center justify-center gap-3 rounded-xl bg-accent px-6 py-4 text-sm font-semibold text-background shadow-lg shadow-accent/20 transition-all duration-300 hover:bg-accent-hover"
            >
              <Send
                size={18}
                aria-hidden="true"
              />

              Envoyez-moi un message

              <ArrowUpRight
                size={17}
                aria-hidden="true"
              />
            </a>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="mt-20 flex flex-col items-center justify-between gap-5 border-t border-border-custom pt-8 text-center text-sm text-muted sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Ibtihale Meftah.
            Tous droits réservés.
          </p>

          <p>
            Conçu avec passion · React & TypeScript
          </p>
        </footer>
      </div>
    </section>
  );
}
