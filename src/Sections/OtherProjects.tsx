import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ProjectCard from "../Components/molecule/ProjectCard";
import { nodeProjects, projects } from "../data/projects";
import { careerProjects, nodeProjects as careerNodeProjects } from "../data/career";
import ProjectSelector, { ProjectMode } from "../Components/molecule/ProjectSelector";

// Each selector tab shows its own dataset, with its own timeline-node mapping
const ExperienceTable = {
  projects: { items: projects, nodes: nodeProjects },
  career: { items: careerProjects, nodes: careerNodeProjects },
};

interface OtherProjectsProps {
  // Experience timeline node to filter by; null shows every project
  selectedNode: string | null;
  onClearNode: () => void;
}

export default function OtherProjects({ selectedNode, onClearNode }: OtherProjectsProps){
    const [mode, setMode] = useState<ProjectMode>("projects");
    const { items, nodes } = ExperienceTable[mode];
    const display = selectedNode
      ? items.filter((project) => nodes[selectedNode]?.includes(project.title))
      : []; // have it display none when nothing is selected, dummy text instead

    return(
        <div className ='header-section bg-zinc-300 animated-grid'>
            <AnimatePresence mode="wait">
              {selectedNode &&
                <motion.div
                  key={selectedNode}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40}}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="grid grid-cols-[1fr_auto_1fr] items-center max-w-[1600px] px-5 mx-auto">
                    <div />
                    <div id="other-projects" className='header-title'>
                      Project & Career Display
                    </div>
                    <div className="justify-self-end">
                      <ProjectSelector value={mode} onChange={setMode} />
                    </div>
                  </div>
                  <div className="max-w-[1600px] px-5 mx-auto">
                    
                    <div className="space-y-20">
                      {display.length === 0 &&
                        <div className="text-neutral-600">No projects/career for this node</div>
                      }
                      {display.map((project, i) => (
                        <ProjectCard key={project.title} {...project} reverse={i % 2 === 1} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              }
            </AnimatePresence>
          </div>
    );
}