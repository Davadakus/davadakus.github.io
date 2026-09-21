import React, { ReactNode, useState } from "react";
import Button from "./Button";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./ProjectCard.css";

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
  
  const [details, setDetails] = useState<boolean>(false);
  
  return (
    <div className ={`${reverse ? "projects-card-reverse" : "projects-card"}`} >
      <div className={`projects-card-image ${reverse ? "order-1 md:order-none" : ""}`}>
        <a href={website} target="_blank" rel="noopener noreferrer">
          <img src={imageSrc} draggable="false" className="w-full h-full object-contain"/>
        </a>
      </div>
      <div className="projects-card-body">
        <div className={`flex-col ${reverse ? "text-end" : ""}`}>
          <h1 className={`font-semibold flex transition-[font-size] duration-300 ease-in-out ${reverse ? "flex-row-reverse" : ""} ${details ? "text-4xl" : "text-7xl"}`}>{title}</h1>
          <h2 className={`transition-[font-size] duration-300 ease-in-out ${details ? "text-xl mb-4" : "text-3xl"}`}> Full Stack </h2>
          <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${details ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
            <div className="overflow-hidden">
              <div className="text-body block whitespace-pre-line">
                {description}
                <div className="text-tiny block my-5">
                  <p><strong>Role: </strong>{role}</p>
                  <p><strong>Tech: </strong>{tech}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="absolute bottom-3 right-3 text-right">
            <button className="flex items-center text-sm cursor-pointer" onClick={() => setDetails((prev) => !prev)}> Details <MdOutlineArrowDropDown size={25} /> </button>
          </div>
        
        {/* <div className={`${reverse ? "projects-link-reverse" : "projects-link"}`}>
          {children}
        </div> */}
      </div>
    </div>
  );
}

