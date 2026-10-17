import Button from "../Components/Button";
import DragScroll from "../Components/DragScroll";
import ExperienceCard from "../Components/ExperienceCard";
import ProjectCard from "../Components/ProjectCard";
import Timeline from "../Components/Timeline";
import timelineSvg from "../assets/Untitled-1.svg";
import experienceTimelineSvg from "../assets/Asset 4.svg";

export default function Experience(){
    return(
        <div className ='header-section bg-zinc-300 animated-grid'>
          <div className="flex justify-center items-center">
            <div id="other-projects" className='header-title'>
              Experience
            </div>
          </div>
          <div className=" max-w-[1600px] mx-auto flex-1 px-5 flex flex-col">
              <div className="bg-neutral-200">
                <div className="mb-4 pt-8 pl-8 text-sm text-neutral-600">
                  // Experience
                </div>
                <DragScroll>
                  {/* Stacked so the timeline sits under the cards instead of beside them (the drag content lays its children out in a row) */}
                  <div className="flex flex-col">
                    <div className="w-full flex items-start gap-10 px-5 pt-15 ">
                      <ExperienceCard imageSrc={"Artwork/OtherProject/CloudTable.png"} title="University" subtitle="Projects" count={5} />
                      <ExperienceCard imageSrc={"Artwork/OtherProject/CloudTable.png"} title="Collage" subtitle="Internship" count={12} />
                    </div>
                    <div className="flex items-start px-5 pt-5 pb-10">
                      {/* draggable off so grabbing the image pans the strip rather than starting a native image drag.
                          The SVG only has a viewBox (no width/height), so without an explicit width the browser falls back to ~300px */}
                      <img src={experienceTimelineSvg} alt="Experience timeline" draggable={false} className="w-[1945px] max-w-none h-auto" />
                    </div>
                  </div>
                </DragScroll>
              </div>

              {/* <Timeline imageSrc={timelineSvg}/> */}
          </div>
        </div>
    );
}