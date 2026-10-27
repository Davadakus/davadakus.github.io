export enum Category {
  FrontEnd = "FrontEnd",
  BackEnd = "BackEnd",
  Tools = "Tools",
  Utility = "Utility",
  GameDev = "GameDev",
}

export enum Tech {
  React = "React",
  JavaScript = "JavaScript",
  TailwindCSS = "TailwindCSS",
  ReactRouter = "ReactRouter",
  ThreeJS = "ThreeJS",
  D3 = "D3",

  Python = "Python",
  Java = "Java",
  FastAPI = "FastAPI",
  NodeJS = "NodeJS",
  ExpressJS = "ExpressJS",
  NextJS = "NextJS",
  NextAuthJS = "NextAuthJS",
  TRPC = "TRPC",
  PostgreSQL = "PostgreSQL",
  Prisma = "Prisma",
  MySQL = "MySQL",
  T3Stack = "T3Stack",

  Unity = "Unity",
  CSharp = "CSharp",
  RenPy = "RenPy",

  GitHub = "GitHub",
  Gradle = "Gradle",
  Poetry = "Poetry",
  Docker = "Docker",
  Vite = "Vite",
  WSL2 = "WSL2",

  ClipStudioPaint = "ClipStudioPaint",
  Photoshop = "Photoshop",
  PremierePro = "PremierePro",
  FLStudio = "FLStudio",
  Ableton = "Ableton",
}

interface TechDefinition {
  name: string;
  description: string;
  category: Category;
}

export const TechDefinitions: Record<Tech, TechDefinition> = {
  // Front-End
  [Tech.React]: {
    name: "React",
    description: "A JavaScript library for building user interfaces out of reusable components.",
    category: Category.FrontEnd,
  },
  [Tech.JavaScript]: {
    name: "JavaScript",
    description: "The programming language of the web, running in every browser and on servers via Node.js.",
    category: Category.FrontEnd,
  },
  [Tech.TailwindCSS]: {
    name: "TailwindCSS",
    description: "A utility-first CSS framework for styling directly in markup.",
    category: Category.FrontEnd,
  },
  [Tech.ReactRouter]: {
    name: "React Router",
    description: "Client-side routing for React apps, mapping URLs to components.",
    category: Category.FrontEnd,
  },
  [Tech.ThreeJS]: {
    name: "Three.js",
    description: "A JavaScript library for rendering 3D graphics in the browser with WebGL.",
    category: Category.FrontEnd,
  },
  [Tech.D3]: {
    name: "D3.js",
    description: "A JavaScript library for building data-driven visualizations with SVG and Canvas.",
    category: Category.FrontEnd,
  },

  // Back-End
  [Tech.Python]: {
    name: "Python",
    description: "A general-purpose language known for readability, used for scripting, back ends, and data work.",
    category: Category.BackEnd,
  },
  [Tech.Java]: {
    name: "Java",
    description: "A statically typed, object-oriented language that runs on the JVM.",
    category: Category.BackEnd,
  },
  [Tech.FastAPI]: {
    name: "FastAPI",
    description: "A modern Python web framework for building fast, typed APIs.",
    category: Category.BackEnd,
  },
  [Tech.NodeJS]: {
    name: "Node.js",
    description: "A JavaScript runtime for running JavaScript outside the browser, typically on servers.",
    category: Category.BackEnd,
  },
  [Tech.ExpressJS]: {
    name: "Express.js",
    description: "A minimal web framework for Node.js for building servers and APIs.",
    category: Category.BackEnd,
  },
  [Tech.NextJS]: {
    name: "Next.js",
    description: "A React framework with server rendering, routing, and API routes built in.",
    category: Category.BackEnd,
  },
  [Tech.NextAuthJS]: {
    name: "NextAuth.js",
    description: "An authentication library for Next.js supporting OAuth, email, and credentials.",
    category: Category.BackEnd,
  },
  [Tech.TRPC]: {
    name: "tRPC",
    description: "End-to-end type-safe APIs for TypeScript without writing schemas.",
    category: Category.BackEnd,
  },
  [Tech.PostgreSQL]: {
    name: "PostgreSQL",
    description: "A powerful open-source relational database.",
    category: Category.BackEnd,
  },
  [Tech.Prisma]: {
    name: "Prisma",
    description: "A type-safe ORM for Node.js and TypeScript.",
    category: Category.BackEnd,
  },
  [Tech.MySQL]: {
    name: "MySQL",
    description: "A widely used open-source relational database.",
    category: Category.BackEnd,
  },
  [Tech.T3Stack]: {
    name: "T3 Stack",
    description: "A full-stack TypeScript starter combining Next.js, tRPC, Prisma, Tailwind, and NextAuth.",
    category: Category.BackEnd,
  },

  // Game Dev
  [Tech.Unity]: {
    name: "Unity",
    description: "A cross-platform game engine for 2D and 3D games.",
    category: Category.GameDev,
  },
  [Tech.CSharp]: {
    name: "C#",
    description: "A modern object-oriented language from Microsoft, used for Unity scripting and .NET.",
    category: Category.GameDev,
  },
  [Tech.RenPy]: {
    name: "Ren'Py",
    description: "A Python-based engine for making visual novels.",
    category: Category.GameDev,
  },

  // Tools
  [Tech.GitHub]: {
    name: "GitHub",
    description: "A platform for hosting Git repositories and collaborating on code.",
    category: Category.Tools,
  },
  [Tech.Gradle]: {
    name: "Gradle",
    description: "A build automation tool, commonly used for Java and Android projects.",
    category: Category.Tools,
  },
  [Tech.Poetry]: {
    name: "Poetry",
    description: "A dependency management and packaging tool for Python.",
    category: Category.Tools,
  },
  [Tech.Docker]: {
    name: "Docker",
    description: "A platform for packaging and running applications in containers.",
    category: Category.Tools,
  },
  [Tech.Vite]: {
    name: "Vite",
    description: "A fast front-end build tool and dev server.",
    category: Category.Tools,
  },
  [Tech.WSL2]: {
    name: "WSL2",
    description: "Windows Subsystem for Linux, which runs a real Linux kernel on Windows.",
    category: Category.Tools,
  },

  // Utility
  [Tech.ClipStudioPaint]: {
    name: "Clip Studio Paint",
    description: "Digital painting and illustration software, popular for comics and anime art.",
    category: Category.Utility,
  },
  [Tech.Photoshop]: {
    name: "Photoshop",
    description: "Adobe’s industry-standard image editing software.",
    category: Category.Utility,
  },
  [Tech.PremierePro]: {
    name: "Premiere Pro",
    description: "Adobe’s professional video editing software.",
    category: Category.Utility,
  },
  [Tech.FLStudio]: {
    name: "FL Studio",
    description: "A digital audio workstation for music production.",
    category: Category.Utility,
  },
  [Tech.Ableton]: {
    name: "Ableton Live",
    description: "A digital audio workstation for music production and live performance.",
    category: Category.Utility,
  },
};
