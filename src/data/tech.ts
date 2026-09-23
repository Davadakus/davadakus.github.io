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
  category: Category;
  link: string;
}

export const TechDefinitions: Record<Tech, TechDefinition> = {
  // Front-End
  [Tech.React]: {
    name: "React",
    category: Category.FrontEnd,
    link: "https://react.dev",
  },
  [Tech.JavaScript]: {
    name: "JavaScript",
    category: Category.FrontEnd,
    link: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  [Tech.TailwindCSS]: {
    name: "TailwindCSS",
    category: Category.FrontEnd,
    link: "https://tailwindcss.com",
  },
  [Tech.ReactRouter]: {
    name: "React Router",
    category: Category.FrontEnd,
    link: "https://reactrouter.com",
  },
  [Tech.ThreeJS]: {
    name: "Three.js",
    category: Category.FrontEnd,
    link: "https://threejs.org",
  },

  // Back-End
  [Tech.Python]: {
    name: "Python",
    category: Category.BackEnd,
    link: "https://www.python.org",
  },
  [Tech.Java]: {
    name: "Java",
    category: Category.BackEnd,
    link: "https://www.java.com",
  },
  [Tech.FastAPI]: {
    name: "FastAPI",
    category: Category.BackEnd,
    link: "https://fastapi.tiangolo.com",
  },
  [Tech.NodeJS]: {
    name: "Node.js",
    category: Category.BackEnd,
    link: "https://nodejs.org",
  },
  [Tech.ExpressJS]: {
    name: "Express.js",
    category: Category.BackEnd,
    link: "https://expressjs.com",
  },
  [Tech.NextJS]: {
    name: "Next.js",
    category: Category.BackEnd,
    link: "https://nextjs.org",
  },
  [Tech.NextAuthJS]: {
    name: "NextAuth.js",
    category: Category.BackEnd,
    link: "https://authjs.dev",
  },
  [Tech.TRPC]: {
    name: "tRPC",
    category: Category.BackEnd,
    link: "https://trpc.io",
  },
  [Tech.PostgreSQL]: {
    name: "PostgreSQL",
    category: Category.BackEnd,
    link: "https://www.postgresql.org",
  },
  [Tech.Prisma]: {
    name: "Prisma",
    category: Category.BackEnd,
    link: "https://www.prisma.io",
  },
  [Tech.MySQL]: {
    name: "MySQL",
    category: Category.BackEnd,
    link: "https://www.mysql.com",
  },
  [Tech.T3Stack]: {
    name: "T3 Stack",
    category: Category.BackEnd,
    link: "https://create.t3.gg",
  },

  // Game Dev
  [Tech.Unity]: {
    name: "Unity",
    category: Category.GameDev,
    link: "https://unity.com",
  },
  [Tech.CSharp]: {
    name: "C#",
    category: Category.GameDev,
    link: "https://learn.microsoft.com/dotnet/csharp",
  },
  [Tech.RenPy]: {
    name: "Ren'Py",
    category: Category.GameDev,
    link: "https://www.renpy.org",
  },

  // Tools
  [Tech.GitHub]: {
    name: "GitHub",
    category: Category.Tools,
    link: "https://github.com",
  },
  [Tech.Gradle]: {
    name: "Gradle",
    category: Category.Tools,
    link: "https://gradle.org",
  },
  [Tech.Poetry]: {
    name: "Poetry",
    category: Category.Tools,
    link: "https://python-poetry.org",
  },
  [Tech.Docker]: {
    name: "Docker",
    category: Category.Tools,
    link: "https://www.docker.com",
  },
  [Tech.Vite]: {
    name: "Vite",
    category: Category.Tools,
    link: "https://vite.dev",
  },
  [Tech.WSL2]: {
    name: "WSL2",
    category: Category.Tools,
    link: "https://learn.microsoft.com/windows/wsl",
  },

  // Utility
  [Tech.ClipStudioPaint]: {
    name: "Clip Studio Paint",
    category: Category.Utility,
    link: "https://www.clipstudio.net",
  },
  [Tech.Photoshop]: {
    name: "Photoshop",
    category: Category.Utility,
    link: "https://www.adobe.com/products/photoshop.html",
  },
  [Tech.PremierePro]: {
    name: "Premiere Pro",
    category: Category.Utility,
    link: "https://www.adobe.com/products/premiere.html",
  },
  [Tech.FLStudio]: {
    name: "FL Studio",
    category: Category.Utility,
    link: "https://www.image-line.com",
  },
  [Tech.Ableton]: {
    name: "Ableton Live",
    category: Category.Utility,
    link: "https://www.ableton.com",
  },
};
