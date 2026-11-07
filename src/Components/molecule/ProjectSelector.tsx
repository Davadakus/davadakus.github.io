import { FaComputer } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import ProjectButton from "../atom/ProjectButton";

export type ProjectMode = "projects" | "career";

interface ProjectSelectorProps {
    value: ProjectMode;
    onChange: (mode: ProjectMode) => void;
}

export default function ProjectSelector({ value, onChange }: ProjectSelectorProps){
    return(
        <div className="flex flex-row-reverse">
            <div className="flex gap-2 bg-neutral-300 rounded-xl p-2">
                <ProjectButton icon={GrProjects} active={value === "projects"} onClick={() => onChange("projects")}>
                    Project
                </ProjectButton>
                <ProjectButton icon={FaComputer} active={value === "career"} onClick={() => onChange("career")}>
                    Career
                </ProjectButton>
            </div>
        </div>
    )
}
