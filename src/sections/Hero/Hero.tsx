
import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  ArrowDown,
  ArrowRight,
  Download,
  FileText,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-background px-6 pt-32 pb-20 text-foreground"
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 left-1/3 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[130px]" />

        <div className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-accent-secondary/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #A78BFA 1px, transparent 1px), linear-gradient(to bottom, #A78BFA 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 90%)",
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Text content */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <Sparkles size={15} aria-hidden="true" />
            Disponible pour un PFE dès février 2027
          </div>

          <p className="mb-3 text-lg font-medium text-muted">
            Bonjour, je suis
          </p>

          <h1 className="mb-6 text-5xl leading-tight font-extrabold tracking-tight sm:text-6xl xl:text-7xl">
            IBTIHALE
            <span className="block bg-gradient-to-r from-accent via-violet-300 to-accent-secondary bg-clip-text text-transparent">
              MEFTAH
            </span>
          </h1>

          <h2 className="mb-6 max-w-2xl text-xl leading-relaxed font-semibold text-foreground sm:text-2xl">
            Étudiante en Développement Digital
            &amp; Systèmes d'Information
          </h2>

          <p className="mb-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
            À la recherche d'un stage de Projet de
            Fin d'Études de 6 mois en développement
            frontend et mobile, à partir de
            février 2027.
          </p>

          <div className="mb-9 flex flex-wrap justify-center gap-4 text-sm text-muted lg:justify-start">
            <span className="inline-flex items-center gap-2">
              <MapPin size={17} className="text-accent" />
              Casablanca, Maroc
            </span>

            <span className="inline-flex items-center gap-2">
              <GraduationCap
                size={18}
                className="text-accent"
              />
              EMSI Casablanca
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap lg:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 font-semibold text-background shadow-lg shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-hover"
            >
              Voir mes projets
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            <a
              href={`${baseUrl}cv/CV-IBTIHALE-MEFTAH.pdf`}
              download="CV-IBTIHALE-MEFTAH.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border-custom bg-surface/70 px-7 py-3.5 font-semibold text-foreground transition-all duration-300 hover:border-accent/50 hover:bg-surface-hover"
            >
              <Download size={18} aria-hidden="true" />
              CV classique
            </a>

            <a
              href={`${baseUrl}cv/CV_Ibtihale_Meftah_ATS.pdf`}
              download="CV-IBTIHALE-MEFTAH-ATS.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-accent/40 bg-accent/10 px-7 py-3.5 font-semibold text-accent transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/20"
            >
              <FileText size={18} aria-hidden="true" />
              Télécharger CV ATS
            </a>
          </div>

          <div className="mt-14 flex items-center justify-center gap-2 text-sm text-muted lg:justify-start">
            <ArrowDown
              size={16}
              className={
                reduceMotion ? "" : "animate-bounce"
              }
              aria-hidden="true"
            />
            Faites défiler pour découvrir
          </div>
        </motion.div>

        {/* Profile photo */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, scale: 0.9, x: 30 }
          }
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: reduceMotion ? 0 : 0.2,
          }}
          className="relative order-1 mx-auto w-full max-w-[350px] lg:order-2 lg:max-w-[430px]"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-8 rounded-full bg-accent/15 blur-[65px]"
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-accent/30 bg-surface p-2 shadow-2xl shadow-accent/10">
            <img
              src={`${baseUrl}images/ibti_photo_cv.png`}
              alt="Portrait professionnel d'Ibtihale Meftah"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center"
              fetchPriority="high"
            />
          </div>

          <div className="absolute -right-3 -bottom-5 rounded-2xl border border-accent/30 bg-surface/95 px-5 py-3 shadow-xl backdrop-blur-lg sm:-right-6">
            <p className="text-sm font-semibold text-foreground">
              Frontend &amp; Mobile
            </p>
            <p className="mt-1 text-xs text-accent">
              PFE · Février 2027
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
