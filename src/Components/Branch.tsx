import React, { ReactNode } from "react";
import Button from "./Button";
import VerticalDivider from "./VerticalDivider";
import DropdownContainer from "./DropdownContainer";
import "./ProjectCard.css";
import TechSquare from "./Tech";
import { Role, RoleDefinitions } from "../data/roles";
import { Tech } from "../data/tech";

interface BranchProps {
  imageSrc: string;
  role: Role;
  tech?: Tech[];
  reverse?: boolean
  children?: ReactNode
}

export default function Branch({
  imageSrc,
  role,
  tech,
  reverse = false,
  children,
}: BranchProps) {

  return (
    <DropdownContainer className="flex flex-col" buttonLabel="Branch">
      {(details) => (
        <div>
          <div className="flex flex-col p-4 bg-neutral-900">

            <div className="flex flex-row items-center gap-4 text-2xl mb-4">
              <img src={imageSrc} draggable="false" className="object-contain size-20"/>
              <VerticalDivider/>
              <div>{RoleDefinitions[role].name}</div>
            </div>  

            {details &&
              <div className="text-xl mb-4">
                <div className="text-neutral-500">
                  Role
                </div>
                <div className="">
                  {RoleDefinitions[role].description}
                </div>
              </div>
            }
            <div>
              {details &&
                <div className={`text-neutral-500 text-xl`} >
                  Tech
                </div>
              }
              <div className="flex flex-wrap gap-4 py-2 text-xl">
                {tech?.map((t) => (
                  <TechSquare key={t} tech={t} />
                ))}
              </div>
            </div>
          
          </div>
          
        </div>
      )}
    </DropdownContainer>

  );
}
