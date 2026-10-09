
export interface ProjectMedia {
  src: string;
  alt: string;
}

export interface ProjectVideo {
  src: string;
  title: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  cover: ProjectMedia;
  videos: ProjectVideo[];
}

export const featuredProject: PortfolioProject = {
  id: "kofert",
  title: "KOFERT Inspection Platform",
  category: "Projet phare · Stage PFA 2026",
  year: "2026",
  description:
    "Plateforme Web & Mobile de digitalisation des rondes d'inspection industrielles, réalisée dans le cadre de mon stage PFA chez OCP-KOFERT.",
  technologies: [
    "Spring Boot",
    "React",
    "Flutter",
    "PostgreSQL",
    "JWT",
    "Docker",
  ],
  cover: {
    src: "/projects/kofert/dashboard.png",
    alt: "Dashboard administrateur KOFERT",
  },
  videos: [
    {
      src: "/projects/kofert/demo-web.mp4",
      title: "Démonstration de l'application Web",
    },
    {
      src: "/projects/kofert/demo-mobile.mp4",
      title: "Démonstration de l'application mobile",
    },
  ],
};

export const projects: PortfolioProject[] = [
  {
    id: "flowers",
    title: "Application Android de prédiction de fleurs",
    category: "Intelligence artificielle",
    year: "",
    description:
      "Application Android permettant de classifier les fleurs comme saines ou malades à l'aide d'un modèle TensorFlow Lite.",
    technologies: [
      "Android",
      "Java",
      "TensorFlow Lite",
      "Firebase",
    ],
    cover: {
      src: "/projects/flowers/flowers.png",
      alt: "Application Android de classification de fleurs",
    },
    videos: [],
  },
  {
    id: "pointage",
    title: "Gestion du pointage numérique des employés",
    category: "Application Web",
    year: "",
    description:
      "Application Web de gestion du pointage des employés, développée dans le cadre d'un projet de fin d'année.",
    technologies: ["React", "Node.js", "MySQL"],
    cover: {
      src: "/projects/pointage/pointage.png",
      alt: "Interface de gestion du pointage",
    },
    videos: [],
  },
  {
    id: "morocco",
    title: "Application mobile Coupe du Monde 2030",
    category: "Application mobile",
    year: "",
    description:
      "Application mobile guide touristique pour la Coupe du Monde 2030 avec gestion eVisa et QR Fan ID.",
    technologies: ["React Native", "Expo", "Mobile"],
    cover: {
      src: "/projects/morocco/morocco.png",
      alt: "Application mobile MoroccoGo 2030",
    },
    videos: [],
  },
  {
    id: "rh",
    title: "Application Web de gestion RH",
    category: "Application Web",
    year: "",
    description:
      "Application de gestion des ressources humaines : employés, congés, départements et suivi des données.",
    technologies: ["ASP.NET Core", "SQL Server"],
    cover: {
      src: "/projects/rh/rh.png",
      alt: "Tableau de bord de gestion RH",
    },
    videos: [],
  },
  {
    id: "stocks",
    title: "Application Java de gestion des stocks",
    category: "Application Java",
    year: "",
    description:
      "Application de gestion des stocks permettant de gérer les produits, les mouvements de stock et le suivi des entrées et sorties.",
    technologies: ["Java", "JavaFX", "MySQL"],
    cover: {
      src: "/projects/stocks/stocks.png",
      alt: "Interface de gestion des stocks",
    },
    videos: [],
  },
  {
    id: "lyme",
    title: "Modélisation de la maladie de Lyme",
    category: "Modélisation mathématique",
    year: "",
    description:
      "Projet de fin d'études : modélisation mathématique de la propagation de la maladie de Lyme à l'aide d'équations aux dérivées partielles.",
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Mathématiques",
    ],
    cover: {
      src: "/projects/lyme/lyme.png",
      alt: "Visualisation mathématique de la maladie de Lyme",
    },
    videos: [],
  },
  {
    id: "eviosys",
    title: "Stage d'observation — Eviosys",
    category: "Expérience professionnelle",
    year: "2025",
    description:
      "Étude et recherche sur le Cloud Computing : concepts, technologies, modèles de déploiement et bénéfices des solutions cloud pour les organisations.",
    technologies: ["Cloud Computing", "Étude"],
    cover: {
      src: "/projects/eviosys/eviosys.png",
      alt: "Eviosys, a Sonoco Company",
    },
    videos: [],
  },
  {
    id: "facimag",
    title: "Stage d'été — FACIMAG",
    category: "Expérience professionnelle",
    year: "",
    description:
      "Gestion des stocks de production avec Cegid, validation des bons d'achat et de vente, et contrôle des données internes de l'entreprise.",
    technologies: [
      "Cegid",
      "Gestion des stocks",
      "Processus métier",
    ],
    cover: {
      src: "/projects/facimag/facimag.png",
      alt: "Entreprise FACIMAG",
    },
    videos: [],
  },
];
