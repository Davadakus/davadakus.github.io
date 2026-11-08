import { useRef, useState } from "react";
import { motion } from "motion/react";
import Button from "../Components/atom/Button";
import DragScroll from "../Components/template/DragScroll";
import ExperienceCard from "../Components/molecule/ExperienceCard";
import { nodeProjects } from "../data/projects";
import timelineSvg from "../assets/Untitled-1.svg";
import experienceTimelineSrc from "../assets/Asset 6.svg";
import experienceTimelineRaw from "../assets/Asset 6.svg?raw";
import fingerSvg from "../assets/Finger.svg";

// The Illustrator export is drawn as a plain image; React only owns a transparent overlay of the same size, so nodes are
// read straight from the export (by their layer name, "1-1") and everything follows the circles whenever it's re-exported
const timelineDoc = new DOMParser().parseFromString(experienceTimelineRaw, "image/svg+xml");
const [, , timelineWidth, timelineHeight] = timelineDoc.documentElement.getAttribute("viewBox")!.split(/\s+/).map(Number);
// Each node's outer circle, in SVG units, left to right
const timelineNodes = [...timelineDoc.querySelectorAll("g[data-name]")]
  .flatMap(group => {
    const circle = group.querySelector("circle");
    if (!circle) return [];
    const attr = (name: string) => Number(circle.getAttribute(name));
    return [{ name: group.getAttribute("data-name")!, cx: attr("cx"), cy: attr("cy"), r: attr("r") }];
  })
  .sort((a, b) => a.cx - b.cx);

const experiences = [
  { imageSrc: "Artwork/OtherProject/CloudTable.png", title: "University", subtitle: "Projects", date: "2021-2024", count: "5" },
  { imageSrc: "Artwork/OtherProject/CloudTable.png", title: "Collage", subtitle: "Internship", date: "2024-Now", count: "12" },
  { imageSrc: "Artwork/OtherProject/CloudTable.png", title: "TBD", subtitle: "TBD", date: "TBD", count: "?" },
];

interface ExperienceProps {
  selectedNode: string | null;
  onSelectNode: (node: string | null) => void;
}

export default function Experience({ selectedNode, onSelectNode }: ExperienceProps){
    // Where the pointer went down, so a drag that ends over a node isn't mistaken for a click
    const pointerStart = useRef({ x: 0, y: 0 });
    // Rings currently expanding out of a node; each removes itself when its animation ends, so fast clicks can overlap
    const [ripples, setRipples] = useState<{ id: number; node: string }[]>([]);
    const nextRippleId = useRef(0);

    function selectNode(node: string) {
      setRipples(rs => [...rs, { id: nextRippleId.current++, node }]);
      // Clicking the selected node again clears the filter
      onSelectNode(node === selectedNode ? null : node);
    }

    function onNodeClick(e: React.MouseEvent, node: string) {
      if (Math.hypot(e.clientX - pointerStart.current.x, e.clientY - pointerStart.current.y) > 5) return;
      selectNode(node);
    }

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
                  // Select a node_
                </div>
                <DragScroll>
                  {/* --card matches ExperienceCard's width (w-[80vw] max-w-[560px]) and everything else is sized from it,
                      so on narrow screens the timeline and gaps shrink along with the cards.
                      Side padding is half a card, so a card centred on an end circle still fits inside the content instead of
                      hanging past the drag limit. The inner width (1545px at full size) sets the timeline's size and circle spacing */}
                  <div className="[--card:min(90vw,560px)] px-[calc(var(--card)/2)] pt-15 pb-10">
                  <div className="flex flex-col w-[calc(var(--card)*1545/450)] sm:w-[calc(var(--card)*1545/560)]">
                    <div className="grid">
                      {experiences.map((exp, i) => (
                        <div key={i} className="[grid-area:1/1] justify-self-start -translate-x-1/2" style={{ marginLeft: `${timelineNodes[i].cx / timelineWidth * 100}%` }}>
                          <ExperienceCard {...exp} />
                        </div>
                      ))}
                    </div>
                    <div
                      className="relative mt-5"
                      onPointerDown={(e) => { pointerStart.current = { x: e.clientX, y: e.clientY }; }}
                    >
                      <img src={experienceTimelineSrc} alt="Experience timeline" draggable={false} className="block w-full" />
                      {/* Same viewBox as the artwork, so everything in here is placed in the export's own units */}
                      <svg viewBox={`0 0 ${timelineWidth} ${timelineHeight}`} className="absolute inset-0 size-full overflow-visible">
                        <defs>
                          {/* Dark glow around the ripple. The filter area is widened so the blur isn't cut off at the ring's edges */}
                          <filter id="node-ripple-glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#000" floodOpacity="0.6" />
                          </filter>
                        </defs>
                        {ripples.map(({ id, node }) => {
                          const { cx, cy, r } = timelineNodes.find(n => n.name === node)!;
                          return (
                            <motion.g
                              key={id}
                              fill="none"
                              filter="url(#node-ripple-glow)"
                              className="pointer-events-none"
                              initial={{ scale: 1, opacity: 1 }}
                              animate={{ scale: 1.8, opacity: 0 }}
                              transition={{ duration: 0.5, ease: [0.2, 0.6, 0.3, 1] }}
                              onAnimationComplete={() => setRipples(rs => rs.filter(ripple => ripple.id !== id))}
                            >
                              {/* A wider black ring under the white one, so it shows as a thin black border on both edges */}
                              <circle cx={cx} cy={cy} r={r} stroke="#000" strokeWidth={5} />
                              <circle cx={cx} cy={cy} r={r} stroke="#fff" strokeWidth={3} />
                            </motion.g>
                          );
                        })}
                        {/* Invisible hit areas over each node that has projects to filter by */}
                        {timelineNodes.filter(({ name }) => name in nodeProjects).map(({ name, cx, cy, r }) => (
                          <circle
                            key={name}
                            cx={cx} cy={cy} r={r}
                            fill="transparent"
                            className="cursor-pointer outline-none"
                            role="button"
                            tabIndex={0}
                            aria-label={`Show projects from node ${name}`}
                            aria-pressed={name === selectedNode}
                            onClick={(e) => onNodeClick(e, name)}
                            onKeyDown={(e) => {
                              if (e.key !== "Enter" && e.key !== " ") return;
                              e.preventDefault();
                              selectNode(name);
                            }}
                          />
                        ))}
                      </svg>
                    </div>
                    {/* Points up at the selected node. The row is always there so selecting a node doesn't shift the layout;
                        sized from --card so it shrinks with everything else (40px at full size) */}
                    <div className="relative h-[calc(var(--card)/14*42/36)] mt-2">
                      {/* One finger per node, always mounted and just hidden when not selected, so both selecting and
                          deselecting are plain transitions (an unmounted element would vanish with no exit animation).
                          Hidden it sits down-right of the node, so it slides in from there and back out the same way */}
                      {timelineNodes.filter(({ name }) => name in nodeProjects).map(({ name, cx }) => (
                        <img
                          key={name}
                          src={fingerSvg}
                          alt=""
                          draggable={false}
                          className={`absolute -translate-y-7 w-15 pointer-events-none transition duration-150 ease-out
                                      ${name === selectedNode ? "opacity-100 -translate-x-1/2" : "opacity-0 translate-x-[calc(-50%+42px)] translate-y-4"}`}
                          style={{ left: `${cx / timelineWidth * 100}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  </div>
                </DragScroll>
              </div>
          </div>
        </div>
    );
}