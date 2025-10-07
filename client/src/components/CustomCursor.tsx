import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const updateCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") !== null ||
        target.closest("a") !== null
      );
    };

    const hideCursor = () => setIsHidden(true);
    const showCursor = () => setIsHidden(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", updateCursor);
    window.addEventListener("mouseout", hideCursor);
    window.addEventListener("mouseenter", showCursor);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateCursor);
      window.removeEventListener("mouseout", hideCursor);
      window.removeEventListener("mouseenter", showCursor);
    };
  }, []);

  // Only show on desktop
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      <div
        className={`fixed w-4 h-4 rounded-full bg-primary mix-blend-difference pointer-events-none z-[9999] transition-all duration-100 ${
          isHidden ? "opacity-0" : "opacity-100"
        } ${isPointer ? "scale-150" : "scale-100"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className={`fixed w-8 h-8 rounded-full border-2 border-primary/30 pointer-events-none z-[9999] transition-all duration-300 ${
          isHidden ? "opacity-0" : "opacity-100"
        } ${isPointer ? "scale-150" : "scale-100"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}
