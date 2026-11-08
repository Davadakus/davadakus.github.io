import type { ComponentProps } from "react";
import ProjectCard from "../Components/molecule/ProjectCard";
import { Role } from "./roles";
import { Tech } from "./tech";

export type Project = ComponentProps<typeof ProjectCard>;

export const careerProjects: Project[] = [ 
    {
        title: "Collage Induction Project",
        imageSrc: "Artwork/OtherProject/animaga.png",
        description: `A project I was asked to make as a demo before joining collage which is just a simple website that displays popular movies using IMDB API
                    `,
        role: Role.FullStack,
        techList: [Tech.React, Tech.TailwindCSS, Tech.Figma],
        linkList: ["https://guide.animaga.com.au/"],
    },
];

export const nodeProjects: Record<string, string[]> = {
  "1-2": ["Collage Induction Project"],
};
