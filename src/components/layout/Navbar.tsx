
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  ArrowUpRight,
  Code2,
  Menu,
  X,
} from "lucide-react";
import { navigationItems } from "../../data/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const reduceMotion = useReducedMotion();

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Observe active page sections
  useEffect(() => {
    const sectionIds = navigationItems.map((item) =>
      item.href.substring(1)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Escape key + body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape
      );

      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, [isOpen]);

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    setActiveSection(href.substring(1));
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled || isOpen
          ? "border-border-custom bg-background/95 shadow-xl shadow-black/20 backdrop-blur-xl"
          : "border-transparent bg-background/60 backdrop-blur-md"
      }`}
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavigation("#home")}
          className="group flex items-center gap-3"
          aria-label="Portfolio - Accueil"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 shadow-lg shadow-accent/5 transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/20">
            <Code2
              className="h-5 w-5 text-accent"
              aria-hidden="true"
            />
          </span>

          <span className="text-xl font-bold tracking-tight text-foreground">
            Portfolio
            <span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => {
            const isActive =
              activeSection === item.href.substring(1);

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavigation(item.href)}
                aria-current={
                  isActive ? "location" : undefined
                }
                className={`relative py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}

                {isActive && (
                  <motion.span
                    layoutId="active-navigation"
                    className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-accent to-accent-secondary"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : {
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }
                    }
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent transition-all duration-300 hover:border-accent/60 hover:bg-accent hover:text-background lg:inline-flex"
        >
          Discutons
          <ArrowUpRight
            size={16}
            aria-hidden="true"
          />
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={
            isOpen ? "Fermer le menu" : "Ouvrir le menu"
          }
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-custom bg-surface/60 text-foreground transition-colors hover:border-accent/50 lg:hidden"
        >
          {isOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            key="mobile-menu"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, height: 0 }
            }
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={
              reduceMotion
                ? { opacity: 0, height: 0 }
                : { opacity: 0, height: 0 }
            }
            transition={{
              duration: reduceMotion ? 0 : 0.25,
            }}
            className="overflow-hidden border-t border-border-custom bg-background/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex max-h-[calc(100dvh-5rem)] flex-col gap-1 overflow-y-auto px-6 py-5">
              {navigationItems.map((item) => {
                const isActive =
                  activeSection ===
                  item.href.substring(1);

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() =>
                      handleNavigation(item.href)
                    }
                    aria-current={
                      isActive
                        ? "location"
                        : undefined
                    }
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                      isActive
                        ? "border border-accent/20 bg-accent/10 text-accent"
                        : "border border-transparent text-muted hover:bg-surface hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
