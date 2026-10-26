import { useRef } from "react";
import Button from "../Components/Button";
import DragScroll from "../Components/DragScroll";
import ExperienceCard from "../Components/ExperienceCard";
import Timeline from "../Components/Timeline";
import { nodeProjects } from "../data/projects";
import timelineSvg from "../assets/Untitled-1.svg";
import experienceTimelineRaw from "../assets/Asset 6.svg?raw";

// Each node's centre as a fraction of the SVG's width, read straight from the Illustrator export
// so the cards follow the circles whenever the artwork is re-exported
const timelineWidth = Number(experienceTimelineRaw.match(/viewBox="[\d.\s-]+?\s([\d.]+)\s[\d.]+"/)?.[1]);
const nodePositions = [...new Set(
  [...experienceTimelineRaw.matchAll(/<circle[^>]*\scx="([\d.]+)"/g)].map(m => Number(m[1]))
)].sort((a, b) => a - b).map(cx => cx / timelineWidth);

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

    function onTimelineClick(e: React.MouseEvent) {
      if (Math.hypot(e.clientX - pointerStart.current.x, e.clientY - pointerStart.current.y) > 5) return;
      // Nodes are found by their Illustrator layer name; the exported id is "_1-1" since ids can't start with a digit
      const node = (e.target as Element).closest("[data-name]")?.getAttribute("data-name");
      // Clicking the selected node again clears the filter
      if (node && node in nodeProjects) onSelectNode(node === selectedNode ? null : node);
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
                  // Experience
                </div>
                <DragScroll>
                  {/* Stacked so the timeline sits under the cards instead of beside them (the drag content lays its children out in a row) */}
                  {/* --card matches ExperienceCard's width (w-[80vw] max-w-[560px]) and everything else is sized from it,
                      so on narrow screens the timeline and gaps shrink along with the cards.
                      Side padding is half a card, so a card centred on an end circle still fits inside the content instead of
                      hanging past the drag limit. The inner width (1545px at full size) sets the timeline's size and circle spacing */}
                  <div className="[--card:min(90vw,560px)] px-[calc(var(--card)/2)] pt-15 pb-10">
                  <div className="flex flex-col w-[calc(var(--card)*1545/450)] sm:w-[calc(var(--card)*1545/560)]">
                    {/* All cards share one grid cell so the row keeps the tallest card's height, while each is placed independently.
                        A percentage margin is relative to this row's width, which matches the image's, so every card stays
                        centred over its circle at any width; translate pulls it back by half its own width */}
                    <div className="grid grid-cols-[minmax(0,1fr)]">
                      {experiences.map((exp, i) => (
                        <div key={i} className="[grid-area:1/1] justify-self-start -translate-x-1/2" style={{ marginLeft: `${nodePositions[i] * 100}%` }}>
                          <ExperienceCard {...exp} />
                        </div>
                      ))}
                    </div>
                    <div
                      role="img"
                      aria-label="Experience timeline"
                      className="mt-5"
                      onPointerDown={(e) => { pointerStart.current = { x: e.clientX, y: e.clientY }; }}
                      onClick={onTimelineClick}
                      dangerouslySetInnerHTML={{ __html: experienceTimelineRaw }}
                    />
                  </div>
                  </div>
                </DragScroll>
              </div>

              {/* <Timeline imageSrc={timelineSvg}/> */}
          </div>
        </div>
    );
}