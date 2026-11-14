import React, { useEffect, useRef, useState } from "react";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { TransformWrapper, TransformComponent, type ReactZoomPanPinchRef } from "react-zoom-pan-pinch";

interface DragScrollProps {
  children: React.ReactNode;
}

function DragScroll({ children = "" }: DragScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const transformRef = useRef<ReactZoomPanPinchRef>(null);
  const [scale, setScale] = useState(1);
  // How far the content is scrolled: 0 = fully left, 1 = fully right
  const [progress, setProgress] = useState(0);

  // Registered natively because React's onWheel is passive and can't preventDefault
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function onWheel(e: WheelEvent) {
      // Ctrl/⌘ + wheel (or trackpad pinch) is left to the library to zoom
      if (e.ctrlKey || e.metaKey) return;
      // Vertical wheeling is left alone so the page scrolls past the strip as normal; it's panned by dragging instead.
      // Only a sideways trackpad swipe moves it
      if (Math.abs(e.deltaY) >= Math.abs(e.deltaX)) return;
      e.preventDefault();

      const instance = transformRef.current?.instance;
      const wrapper = instance?.wrapperComponent;
      const content = instance?.contentComponent;
      if (!instance || !wrapper || !content) return;

      const { positionX, positionY, scale } = instance.state;
      const minX = Math.min(0, wrapper.clientWidth - content.offsetWidth * scale);
      // Nothing to scroll; returning (rather than clamping to 0) leaves a zoomed-out strip where it is
      if (minX === 0) return;

      // Jumps with no animation, so fast swiping can't cut a glide short partway through
      const x = Math.max(minX, Math.min(0, positionX - e.deltaX));
      transformRef.current?.setTransform(x, positionY, scale, 0);
    }

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  return (
      <div ref={containerRef} className="relative cursor-grab active:cursor-grabbing select-none flex min-h-[500px]">
        <TransformWrapper
          ref={transformRef}
          minScale={0.5}
          initialScale={1}
          maxScale={2}
          // Plain wheel scrolls the page and a sideways swipe pans (handled above); Ctrl/⌘ + wheel (or trackpad pinch) zooms
          wheel={{ activationKeys: ["Control", "Meta"] }}
          doubleClick={{ disabled: true }}
          // Zoom jumps straight to the new scale instead of animating (and doesn't overshoot past min/max)
          zoomAnimation={{ disabled: true }}
          // Horizontal only: no vertical panning, and zoom keeps the strip vertically centred
          panning={{ lockAxisY: true }}
          // The content's left edge never moves right of the strip's left edge, so the first card is as far left as it goes
          maxPositionX={0}
          autoAlignment={{ sizeX: 1000,
            animationType: "easeInQuad"
           }}  
          // Dragging can pull a little past either end (% of the strip's width) before it rubber-bands back
          onTransform={(ref, state) => {
            setScale(state.scale);
            const wrapper = ref.instance.wrapperComponent;
            const content = ref.instance.contentComponent;
            if (!wrapper || !content) return;
            const minX = Math.min(0, wrapper.clientWidth - content.offsetWidth * state.scale);
            setProgress(minX === 0 ? 0 : Math.max(0, Math.min(1, state.positionX / minX)));
          }}
        >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            {/* The library sizes both boxes to fit their content, which crops anything zoomed past the cards' own height.
                Instead the viewport stretches to the strip's full height, and the content fills it with the cards centred,
                so zooming grows the cards into the whole strip (the controls below just float over them) */}
            <TransformComponent wrapperClass="!w-full !h-auto self-stretch" contentClass="!w-max !h-full items-center" infinite={true}>
              {children}
            </TransformComponent>
            <div className="absolute bottom-7 inset-x-8 flex items-center justify-between pointer-events-none">
              <div className="relative flex bg-red-400/50 w-30 h-5 rounded-xl items-center">
                {/* Slides from 0.25rem in on the left to 0.25rem in on the right (2.5rem thumb + 0.5rem of padding) */}
                <div
                  className="absolute rounded-xl bg-red-500 w-10 h-4"
                  style={{ left: `calc(0.25rem + ${progress} * (100% - 3rem))` }}
                >
                </div>
              </div>
              <div className="flex items-center gap-4 text-neutral-900/70 cursor-default pointer-events-auto ">
                <button className="hover:text-black cursor-pointer" onClick={() => zoomOut(0.1)} aria-label="Zoom out"><FiMinus size={30} /></button>
                <button className=" hover:text-black cursor-pointer text-xl" onClick={() => resetTransform(0)} aria-label="Reset zoom">{Math.round(scale * 100)}%</button>
                <button className="hover:text-black cursor-pointer" onClick={() => zoomIn(0.1)} aria-label="Zoom in"><IoMdAdd size={30} /></button>
              </div>
            </div>
          </>
      )}
        </TransformWrapper>
      </div>
  );
}

export default DragScroll;
