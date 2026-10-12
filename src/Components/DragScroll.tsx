import React, { useEffect, useRef } from "react";
import { TransformWrapper, TransformComponent, type ReactZoomPanPinchRef } from "react-zoom-pan-pinch";

interface DragScrollProps {
  children: React.ReactNode;
  className?: string;
}

// How long the content takes to glide to a new wheel position, in ms
const WHEEL_ANIMATION = 200;

function DragScroll({ children, className = "" }: DragScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const transformRef = useRef<ReactZoomPanPinchRef>(null);
  // Where the wheel is heading, so quick wheel ticks add up instead of restarting from mid-animation
  const wheel = useRef({ target: 0, lastTime: 0 });

  // Registered natively because React's onWheel is passive and can't preventDefault
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function onWheel(e: WheelEvent) {
      const instance = transformRef.current?.instance;
      const wrapper = instance?.wrapperComponent;
      const content = instance?.contentComponent;
      if (!instance || !wrapper || !content) return;

      const minX = Math.min(0, wrapper.clientWidth - content.offsetWidth);
      // Nothing to scroll, so let the page handle the wheel
      if (minX === 0) return;
      e.preventDefault();

      const w = wheel.current;
      if (e.timeStamp - w.lastTime > WHEEL_ANIMATION) w.target = instance.state.positionX;
      w.lastTime = e.timeStamp;

      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      w.target = Math.max(minX, Math.min(0, w.target - delta));
      transformRef.current?.setTransform(w.target, 0, 1, WHEEL_ANIMATION, "easeOut");
    }

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div ref={containerRef} className={`cursor-grab active:cursor-grabbing select-none ${className}`}>
      <TransformWrapper
        ref={transformRef}
        // Fixed at 1x: this is a horizontal scroller, not a zoomable canvas
        minScale={1}
        maxScale={1}
        wheel={{ disabled: true }}
        pinch={{ disabled: true }}
        doubleClick={{ disabled: true }}
        panning={{ lockAxisY: true }}
      >
        <TransformComponent wrapperClass="!w-full" contentClass="!w-max">
          {children}
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

export default DragScroll;
