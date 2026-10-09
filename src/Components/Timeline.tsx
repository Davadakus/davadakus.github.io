import { useRef, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface TimelinedProps {
  imageSrc: string;
}

export default function Timeline({
  imageSrc,
}: TimelinedProps) {
  const [scale, setScale] = useState(1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={wrapperRef} className="relative w-full h-full cursor-grab active:cursor-grabbing select-none">
      <TransformWrapper
        minScale={1}
        maxScale={4}
        // Plain wheel keeps scrolling the page; Ctrl/⌘ + wheel (or trackpad pinch) zooms
        wheel={{ activationKeys: ["Control", "Meta"] }}
        doubleClick={{ disabled: true }}
        // Horizontal only: no vertical panning, and zoom keeps the strip vertically centred
        panning={{ lockAxisY: true }}
        trackPadPanning={{ lockAxisY: true }}
        customTransform={(x, _y, s) => {
          const height = wrapperRef.current?.clientHeight ?? 0;
          return `translate3d(${x}px, ${(height * (1 - s)) / 2}px, 0) scale(${s})`;
        }}
        // Rubber-band past the edges / past min-max zoom, then bounce back on release
        autoAlignment={{ sizeX: 100, sizeY: 0, animationTime: 300 }}
        zoomAnimation={{ size: 0.4, animationTime: 300 }}
        onTransform={(_, state) => setScale(state.scale)}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <TransformComponent wrapperClass="!w-full !h-full" contentClass="!h-full">
              <img
                src={imageSrc}
                draggable="false"
                className="h-full w-auto max-w-none"
              />
            </TransformComponent>

            {/* Zoom controls */}
            <div className="absolute bottom-2 right-2 flex items-center gap-1 text-lg cursor-default">
              <button className="size-8 bg-neutral-900/70 text-white" onClick={() => zoomOut()} aria-label="Zoom out">−</button>
              <button className="h-8 px-2 bg-neutral-900/70 text-white text-sm" onClick={() => resetTransform()} aria-label="Reset zoom">{Math.round(scale * 100)}%</button>
              <button className="size-8 bg-neutral-900/70 text-white" onClick={() => zoomIn()} aria-label="Zoom in">+</button>
            </div>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
