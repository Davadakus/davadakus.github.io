import React from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

interface DropdownButtonProps {
  onClick: () => void;
  showLabel?: boolean;
  label?: string;
  className?: string;
  expanded?: boolean;
}

export default function DropdownButton({ onClick, showLabel = true, label = "Details", className = "", expanded = false }: DropdownButtonProps) {
  const Icon = expanded ? MdOutlineArrowDropUp : MdOutlineArrowDropDown;
  return (
    <button className={`flex items-center text-sm cursor-pointer text-white ${className}`} onClick={onClick}>
      {showLabel && `${label} `}
      <Icon size={25} />
    </button>
  );
}
