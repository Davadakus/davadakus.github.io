import Button from "../Components/Button";
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
            <div className=" max-w-[1600px] px-5 mx-auto h-[200px] bg-amber-100/30">
                <Timeline imageSrc={timelineSvg}/>
            </div>
          </div>
    );
}