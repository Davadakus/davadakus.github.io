import React, { useRef, useEffect } from "react";

// Requires some testing to get it working



function Magnifier({ src, zoom = 2, className = "" }) {
  const imgRef = useRef(null);
  const glassRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const glass = document.createElement("div");
    glass.setAttribute("class", "img-magnifier-glass");
    glassRef.current = glass;

    // Style the magnifier
    Object.assign(glass.style, {
      position: "absolute",
      border: "3px solid #000",
      borderRadius: "50%",
      cursor: "none",
      width: "100px",
      height: "100px",
      zIndex: 100,
      backgroundRepeat: "no-repeat",
      backgroundImage: `url('${img.src}')`,
      backgroundSize: `${img.width * zoom}px ${img.height * zoom}px`,
      display: "none",
    });

    img.parentElement.style.position = "relative";
    img.parentElement.appendChild(glass);

    function getCursorPos(e) {
      const a = img.getBoundingClientRect();
      let x = e.pageX - a.left - window.pageXOffset;
      let y = e.pageY - a.top - window.pageYOffset;
      return { x, y };
    }

    function moveMagnifier(e) {
      e.preventDefault();
      const { x, y } = getCursorPos(e);
      const bw = 3;
      const w = glass.offsetWidth / 2;
      const h = glass.offsetHeight / 2;

      if (x > img.width || y > img.height || x < 0 || y < 0) {
        glass.style.display = "none";
        return;
      }

      glass.style.display = "block";
      glass.style.left = `${x - w}px`;
      glass.style.top = `${y - h}px`;
      glass.style.backgroundPosition = `-${x * zoom - w + bw}px -${y * zoom - h + bw}px`;
    }

    img.addEventListener("mousemove", moveMagnifier);
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mouseleave", () => (glass.style.display = "none"));
    img.addEventListener("mouseenter", () => (glass.style.display = "block"));

    return () => {
      img.removeEventListener("mousemove", moveMagnifier);
      glass.removeEventListener("mousemove", moveMagnifier);
      img.removeEventListener("mouseleave", () => (glass.style.display = "none"));
      img.removeEventListener("mouseenter", () => (glass.style.display = "block"));
      glass.remove();
    };
  }, [zoom]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt=""
      draggable="false"
      className={`object-contain ${className}`}
    />
  );
}

export default Magnifier;
