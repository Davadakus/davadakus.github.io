import frontEndIcon from "../assets/Branch/Frontend.svg";
import backEndIcon from "../assets/Branch/Backend.svg";
import fullStackIcon from "../assets/Branch/Fullstack.svg";

export enum Role {
  FrontEnd = "FrontEnd",
  BackEnd = "BackEnd",
  FullStack = "FullStack",
  GameDev = "GameDev",
}

interface RoleDefinition {
  name: string;
  description: string;
  // Icon shown on the role's Branch card
  image: string;
}

export const RoleDefinitions: Record<Role, RoleDefinition> = {
  [Role.FrontEnd]: {
    name: "Front-End",
    description:
      "Building the user-facing side of an application: layout, interactivity, and the visuals a user directly interacts with.",
    image: frontEndIcon,
  },
  [Role.BackEnd]: {
    name: "Back-End",
    description:
      "Building the server-side logic, APIs, and data layer that power an application behind the scenes.",
    image: backEndIcon,
  },
  [Role.FullStack]: {
    name: "Full-Stack",
    description:
      "Working across both the front-end and back-end, from the interface a user sees to the systems that support it.",
    image: fullStackIcon,
  },
  [Role.GameDev]: {
    name: "Game Development",
    description:
      "Designing and building interactive games, covering gameplay systems, mechanics, and the tools used to create them.",
    image: "/Artwork/arknights_guard.webp",
  },
};
