import React, { ReactNode, useEffect, useRef, useState } from "react";
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
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>();

  // Track the content's natural height so the wrapper can transition between sizes
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => setHeight(el.offsetHeight));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <DropdownContainer className="flex flex-col" buttonLabel="Branch">
      {(details) => (
        <div
          className="overflow-hidden transition-[height] duration-300 ease-out motion-reduce:transition-none"
          style={{ height }}
        >
          <div ref={contentRef} className={`flex flex-col p-4 ${details ? "bg-neutral-900/70" : "bg-neutral-900"} `}>

            <div className="flex flex-row items-center gap-4 text-2xl mb-4">
              <img src={imageSrc} draggable="false" className="object-contain size-20"/>
              <VerticalDivider/>
              <div>{RoleDefinitions[role].name}</div>
            </div>  

            {details &&
              <div className="text-xl mb-4 transition-opacity duration-300 ease-out starting:opacity-0">
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
                <div className="text-neutral-500 text-xl transition-opacity duration-300 ease-out starting:opacity-0">
                  Tech
                </div>
              }
              <div className={`flex gap-4 py-2 text-xl items-center ${details ? "flex-wrap" : "flex-nowrap overflow-hidden"}`}>
                {(details ? techList : techList?.slice(0, 3))?.map((t) => (
                  <TechSquare key={t} tech={t} className="transition-opacity duration-300 ease-out starting:opacity-0" />
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
