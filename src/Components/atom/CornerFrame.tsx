import "./CornerFrame.css";

interface CornerFrameProps {
  expanded?: boolean;
}

export default function CornerFrame({ expanded = false }: CornerFrameProps) {
  return (
    <span className={`corner-frame ${expanded ? "expanded" : ""}`}>
      <span className="corner-frame-corner top-left" />
      <span className="corner-frame-corner top-right" />
      <span className="corner-frame-corner bottom-left" />
      <span className="corner-frame-corner bottom-right" />
    </span>
  );
}
