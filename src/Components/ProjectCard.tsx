import React, { ReactNode } from "react";
import Button from "./Button";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  role: string;
  tech: string;
  reverse?: boolean;
  children: ReactNode
}

export default function ProjectCard({
  imageSrc,
  title,
  description,
  role,
  tech,
  children,
  reverse = false
}: ProjectCardProps) {
  return (
    <div className ={`${reverse ? "projects-card-reverse" : "projects-card"}`} >
      <div className="projects-card-image">
        <img src={imageSrc} draggable="false" className="object-contain"/>
      </div>
      <div className="projects-card-body">
        <div className={`flex-auto ${reverse ? "text-end" : ""}`}>
          <h1 className="text-header mb-3">{title}</h1>
          <div className="text-body block">
            {description}
            <div className="text-tiny block my-5">
              <p><strong>Role: </strong>{role}</p>
              <p><strong>Tech: </strong>{tech}</p>
            </div>
          </div>
        </div>
        
        <div className={`${reverse ? "projects-link-reverse" : "projects-link"}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

