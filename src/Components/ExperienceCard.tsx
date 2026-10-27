import React from "react";
import "./Button.css";

interface ExperienceProps {
  imageSrc: string;
  title?: string;
  subtitle?: string;
  date?: string;
  count?: string;
}

function ExperienceCard({ imageSrc, title, subtitle, date, count }: ExperienceProps) {
  return (
    <div className="flex flex-col w-[80vw] max-w-[560px] shrink-0 bg-neutral-100">
        <div className="w-full aspect-[8/3] overflow-hidden">
            <img src={imageSrc} draggable="false" className="w-full h-full object-cover scale-150"/>
        </div>
        
        <div className="flex flex-row pr-2 py-2 items-center justify-between">
            <div className="flex flex-col pl-2 gap-2 border-l-4 border-red-500">
                <div className="flex flex-col">
                    <div className="font-semibold text-xl">
                        {title}
                    </div>
                    <div className="text-neutral-600">
                        // {subtitle}
                    </div>
                </div>
                <div className="font-semibold text-[10px] text-neutral-400">
                    {date}
                </div>
            </div>
            <div className="flex flex-row items-center gap-1">
                <div className="text-neutral-600">
                    count
                </div>
                <div className="font-extrabold text-3xl">
                    {count}
                </div>
            </div>
        </div>
    </div>
  );
}

export default ExperienceCard;