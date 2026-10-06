import React, { ReactNode } from "react";
import Button from "./Button";
import "./ProjectCard.css";
import Branch from "./Branch";
import DropdownContainer from "./DropdownContainer";
import { Role, RoleDefinitions } from "../data/roles";
import { Tech } from "../data/tech";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  role: Role;
  techList: Tech[];
  linkList?: string[];
  reverse?: boolean;
}

export default function ProjectCard({
  imageSrc,
  title,
  description,
  role,
  techList,
  linkList,
  reverse = false,
}: ProjectCardProps) {

  return (
    <DropdownContainer className="flex flex-col">
      {(details) => (
        <>
          <div className ={`${reverse ? "projects-card-reverse" : "projects-card"} ${details ? "bg-neutral-900/80" : "bg-neutral-700 max-h-[420px]"}`} >
            <div className={`projects-card-image ${reverse ? "order-1 md:order-none" : ""} ${details ? "flex-[1.3]" : "flex-1 -translate-x-12 -translate-y-10"}`}>
              <div className="block w-full h-full">
                <img src={imageSrc} draggable="false" className="w-full h-full object-cover"/>
              </div>
            </div>
            <div className="projects-card-body">
              <div className={`flex-col ${reverse ? "text-end" : ""}`}>
                <div className={`duration-300 ease-out ${details ? "" : "-translate-x-12"}`}>
                  <h1 className={`font-semibold flex transition-[font-size] duration-300 ease-out ${reverse ? "flex-row-reverse" : ""} ${details ? "text-4xl" : "text-7xl"}`}>{title}</h1>
                  <h2 className={`transition-[font-size] duration-300 ease-out text-neutral-400 ${details ? "text-xl" : "text-3xl"}`}> {RoleDefinitions[role].name} </h2>
                </div>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${details ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className="text-body block whitespace-pre-line my-4">
                      {description}
                    </div>
                    <Branch imageSrc="public/Artwork/arknights_guard.webp" role={role} techList={techList} linkList={linkList} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </DropdownContainer>

  );
}
