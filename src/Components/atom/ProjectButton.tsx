import { ReactNode } from "react";
import { IconType } from "react-icons";
import { motion } from "motion/react";

interface ProjectButtonProps {
    icon: IconType;
    active?: boolean;
    onClick?: () => void;
    children?: ReactNode;
}

export default function ProjectButton({ icon: Icon, active = false, onClick, children }: ProjectButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`relative flex gap-2 items-center px-3 py-1.5 rounded-lg transition-colors ${
                active ? "text-black" : "text-neutral-500 hover:text-neutral-800"
            }`}
        >
            {/* Shared layoutId makes the highlight slide between buttons */}
            {active && (
                <motion.div
                    layoutId="project-selector-pill"
                    className="absolute inset-0 bg-white rounded-lg shadow"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
            )}
            <Icon className="relative size-5" />
            <div className="relative">{children}</div>
        </button>
    );
}
