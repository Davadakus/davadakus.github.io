import Button from "../Components/Button";
import ProjectCard from "../Components/ProjectCard";
import { nodeProjects, projects } from "../data/projects";

interface OtherProjectsProps {
  // Experience timeline node to filter by; null shows every project
  selectedNode: string | null;
  onClearNode: () => void;
}

export default function OtherProjects({ selectedNode, onClearNode }: OtherProjectsProps){
    const shown = selectedNode
      ? projects.filter((project) => nodeProjects[selectedNode]?.includes(project.title))
      : projects;

    return(
        <div className ='header-section bg-zinc-300 animated-grid'>
           {/* <SectionHeader>Other Projects</SectionHeader> */}
            <div className="flex justify-center items-center">
              <div id="other-projects" className='header-title'>
                Other Projects
                {/* <img src="Artwork/Chibi/ChibiGame.webp" className='absolute max-w-[150px] -translate-x-40'/> */}
              </div>
            </div>
            <div className="max-w-[1600px] px-5 mx-auto space-y-20">
              {selectedNode &&
                <div className="flex items-center gap-4 text-neutral-600">
                  <div>// Showing projects for {selectedNode}</div>
                  <button className="underline cursor-pointer" onClick={onClearNode}>Show all</button>
                </div>
              }
              {selectedNode && shown.length === 0 &&
                <div className="text-neutral-600">No projects for this node yet</div>
              }
              {/* Alternating sides down the page */}
              {shown.map((project, i) => (
                <ProjectCard key={project.title} {...project} reverse={i % 2 === 1} />
              ))}
            </div>
          </div>
    );
}