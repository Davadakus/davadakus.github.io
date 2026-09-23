import React, { ReactNode } from "react";
import Button from "./Button";
import "./ProjectCard.css";
import Branch from "./Branch";
import DropdownContainer from "./DropdownContainer";
import { Role } from "../data/roles";
import { Tech } from "../data/tech";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  role: string;
  tech: string;
  reverse?: boolean;
  website?: string;
  children: ReactNode
}

export default function ProjectCard({
  imageSrc,
  title,
  description,
  role,
  tech,
  reverse = false,
  website,
  children,
}: ProjectCardProps) {

  return (
    <DropdownContainer className="flex flex-col">
      {(details) => (
        <>
          <div className ={`${reverse ? "projects-card-reverse" : "projects-card"} ${details ? "" : "max-h-[420px]"}`} >
            <div className={`projects-card-image ${reverse ? "order-1 md:order-none" : ""} ${details ? "flex-[1.3]" : "flex-1 -translate-x-12 -translate-y-10"}`}>
              <a href={website} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <img src={imageSrc} draggable="false" className="w-full h-full object-cover"/>
              </a>
            </div>
            <div className="projects-card-body">
              <div className={`flex-col ${reverse ? "text-end" : ""}`}>
                <div className={`duration-300 ease-out ${details ? "" : "-translate-x-12"}`}>
                  <h1 className={`font-semibold flex transition-[font-size] duration-300 ease-out ${reverse ? "flex-row-reverse" : ""} ${details ? "text-4xl" : "text-7xl"}`}>{title}</h1>
                  <h2 className={`transition-[font-size] duration-300 ease-out ${details ? "text-xl" : "text-3xl"}`}> Full Stack </h2>
                </div>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${details ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className="text-body block whitespace-pre-line my-4">
                      {description}
                      {/* <div className="text-tiny block my-5">
                        <p><strong>Role: </strong>{role}</p>
                        <p><strong>Tech: </strong>{tech}</p>
                      </div> */}
                    </div>
                    <Branch imageSrc="public/Artwork/arknights_guard.webp" role={Role.FullStack} tech={[Tech.React, Tech.TailwindCSS]} />
                  </div>
                </div>
              </div>

              {/* <div className={`${reverse ? "projects-link-reverse" : "projects-link"}`}>
                {children}
              </div> */}
            </div>
          </div>
        </>
      )}
    </DropdownContainer>

  );
}
