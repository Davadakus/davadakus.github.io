import Button from "../Components/Button";
import DragScroll from "../Components/DragScroll";
import ExperienceCard from "../Components/ExperienceCard";
import ProjectCard from "../Components/ProjectCard";
import Timeline from "../Components/Timeline";
import timelineSvg from "../assets/Untitled-1.svg";

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
                  <div className="w-full flex items-start gap-10 px-5">
                    <ExperienceCard imageSrc={"Artwork/OtherProject/CloudTable.png"} title="University" subtitle="Projects" count={5} />
                    <ExperienceCard imageSrc={"Artwork/OtherProject/CloudTable.png"} title="Collage" subtitle="Internship" count={12} />
                  </div>
                </DragScroll>
              </div>

              {/* <Timeline imageSrc={timelineSvg}/> */}
          </div>
        </div>
    );
}