import React, { ReactNode } from "react";
import Button from "./Button";
import VerticalDivider from "./VerticalDivider";
import DropdownContainer from "./DropdownContainer";
import "./ProjectCard.css";
import TechSquare from "./Tech";
import { Role, RoleDefinitions } from "../data/roles";
import { Tech } from "../data/tech";
import HorizontalDivider from "./HorizontalDivider";

interface BranchProps {
  imageSrc: string;
  role: Role;
  techList?: Tech[];
  reverse?: boolean
  children?: ReactNode
}

export default function Branch({
  imageSrc,
  role,
  techList,
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
              <div className={`flex gap-4 py-2 text-xl items-center ${details ? "flex-wrap" : "flex-nowrap overflow-hidden"}`}>
                {(details ? techList : techList?.slice(0, 3))?.map((t) => (
                  <TechSquare key={t} tech={t} />
                ))}
                {!details && techList && techList.length > 3 &&
                  <div className="text-neutral-500">...</div>
                }
              </div>
            </div>
          
          </div>
          
        </div>
      )}
    </DropdownContainer>

  );
}
