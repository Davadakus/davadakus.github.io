import React from "react";
import "./Button.css";

interface ExperienceProps {
  imageSrc: string;
  title?: string;
  subtitle?: string;
  count?: number;
}

function ExperienceCard({ imageSrc, title, subtitle, count }: ExperienceProps) {
  return (
    <div className="flex flex-col max-w-[560px] bg-neutral-100">
        <div className="w-full aspect-[8/3] overflow-hidden">
            <img src={imageSrc} draggable="false" className="w-full h-full object-cover scale-150"/>
        </div>
        
        <div className="flex flex-row px-2 py-1 items-center justify-between">
            <div className="flex flex-col">
                <div>
                    {title}
                </div>
                <div className="text-neutral-600">
                    // {subtitle}
                </div>
            </div>
            <div className="flex flex-row items-center gap-1">
                <div className="text-neutral-600">
                    count
                </div>
                <div className="font-extrabold text-3xl ">
                    {count}
                </div>
            </div>
        </div>
    </div>
  );
}

export default ExperienceCard;