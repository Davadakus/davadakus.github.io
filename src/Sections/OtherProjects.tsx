import { useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import { nodeProjects, projects } from "../data/projects";
import { collageProjects, nodeProjects as collageNodeProjects } from "../data/collage";
import ProjectSelector, { ProjectMode } from "../Components/molecule/ProjectSelector";

// Each selector tab shows its own dataset, with its own timeline-node mapping
const datasets = {
  projects: { items: projects, nodes: nodeProjects },
  career: { items: collageProjects, nodes: collageNodeProjects },
};

interface OtherProjectsProps {
  // Experience timeline node to filter by; null shows every project
  selectedNode: string | null;
  onClearNode: () => void;
}

export default function OtherProjects({ selectedNode, onClearNode }: OtherProjectsProps){
    const [mode, setMode] = useState<ProjectMode>("projects");
    const { items, nodes } = datasets[mode];
    const shown = selectedNode
      ? items.filter((project) => nodes[selectedNode]?.includes(project.title))
      : items;

    return(
        <div className ='header-section bg-zinc-300 animated-grid'>
           {/* <SectionHeader>Other Projects</SectionHeader> */}
            <div className="flex justify-center items-center">
              <div id="other-projects" className='header-title'>
                Other Projects
                {/* <img src="Artwork/Chibi/ChibiGame.webp" className='absolute max-w-[150px] -translate-x-40'/> */}
              </div>
            </div>
            <div className="max-w-[1600px] px-5 mx-auto">
              <ProjectSelector value={mode} onChange={setMode} />
              <div className="space-y-20">
                {selectedNode && shown.length === 0 &&
                  <div className="text-neutral-600">No projects for this node yet</div>
                }
                {/* Alternating sides down the page */}
                {shown.map((project, i) => (
                  <ProjectCard key={project.title} {...project} reverse={i % 2 === 1} />
                ))}
              </div>
            </div>
          </div>
    );
}