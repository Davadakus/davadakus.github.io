import React, { ReactNode } from "react";
import Image from 'next/image'

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
    <div className ={`${reverse ? "projects-card-reverse" : "projects-card"}`} >
      <div className="projects-card-image">
        <a href={website} target="_blank" rel="noopener noreferrer">
          <Image
            src={imageSrc}
            alt="button-icon"
            draggable="false"
            width={900}
            height={500}
            />
        </a>
      </div>
      <div className="projects-card-body">
        <div className={`flex-auto ${reverse ? "text-end" : ""}`}>
          <h1 className={`text-header mb-3 flex ${reverse ? "flex-row-reverse" : ""}`}>{title}</h1>
          <div className="text-body block whitespace-pre-line">
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

