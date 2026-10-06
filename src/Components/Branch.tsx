import React, { ReactNode, useEffect, useRef, useState } from "react";
import Button from "./Button";
import VerticalDivider from "./VerticalDivider";
import DropdownContainer from "./DropdownContainer";
import "./ProjectCard.css";
import TechSquare from "./Tech";
import { Role, RoleDefinitions } from "../data/roles";
import { Tech } from "../data/tech";
import HorizontalDivider from "./HorizontalDivider";
import Link from "./Link";

interface BranchProps {
  imageSrc: string;
  role: Role;
  techList?: Tech[];
  linkList?: string[];
  reverse?: boolean;
  children?: ReactNode;
}

export default function Branch({
  imageSrc,
  role,
  techList,
  linkList,
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
          <div ref={contentRef} className={`flex flex-col p-4 space-y-4 ${details ? "bg-neutral-900/50" : "bg-neutral-900"} `}>

            <div className="flex flex-row items-center gap-4 text-2xl">
              <img src={imageSrc} draggable="false" className="object-contain size-20"/>
              <VerticalDivider/>
              <div>{RoleDefinitions[role].name}</div>
            </div>  

            {/* Role */}
            {details &&
              <div className="text-xl transition-opacity duration-300 ease-out starting:opacity-0">
                <div className="text-neutral-500">
                  Role
                </div>
                <div>
                  {RoleDefinitions[role].description}
                </div>
              </div>
            }
            <div>

            {/* Tech */}
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

            {/* Links */}
              {details &&
            <div>
                <div className="text-neutral-500 text-xl transition-opacity duration-300 ease-out starting:opacity-0">
                  Links
                </div>
              <div className="flex flex-wrap gap-4 py-2 text-3xl items-center">
                {linkList?.map((url) => (
                  <Link key={url} url={url} className="transition-opacity duration-300 ease-out starting:opacity-0" />
                ))}
              </div>
            </div>
              }
          
          </div>
          
        </div>
      )}
    </DropdownContainer>

  );
}
