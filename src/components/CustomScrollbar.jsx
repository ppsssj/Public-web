import { useEffect, useRef, useState } from "react";

export default function CustomScrollbar() {
  const trackRef = useRef(null);
  const dragRef = useRef({ active: false, startY: 0, startScroll: 0 });
  const [state, setState] = useState({ top: 0, height: 0, visible: false });

  useEffect(() => {
    const update = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const maxScroll = scrollHeight - viewportHeight;

      if (maxScroll <= 0) {
        setState({ top: 0, height: 0, visible: false });
        return;
      }

      const trackHeight = viewportHeight;
      const height = Math.max((viewportHeight / scrollHeight) * trackHeight, 38);
      const top = (window.scrollY / maxScroll) * (trackHeight - height);

      setState({ top, height, visible: true });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const onPointerMove = (event) => {
      if (!dragRef.current.active) return;

      const scrollHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const maxScroll = scrollHeight - viewportHeight;
      const trackHeight = trackRef.current?.clientHeight || viewportHeight;
      const maxThumbTop = Math.max(trackHeight - state.height, 1);
      const delta = event.clientY - dragRef.current.startY;
      const nextScroll = dragRef.current.startScroll + (delta / maxThumbTop) * maxScroll;

      window.scrollTo(0, Math.min(Math.max(nextScroll, 0), maxScroll));
    };

    const onPointerUp = () => {
      dragRef.current.active = false;
      document.body.classList.remove("is-scrollbar-dragging");
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [state.height]);

  if (!state.visible) {
    return null;
  }

  const onTrackPointerDown = (event) => {
    if (event.target !== trackRef.current) return;

    const rect = trackRef.current.getBoundingClientRect();
    const ratio = (event.clientY - rect.top - state.height / 2) / Math.max(rect.height - state.height, 1);
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    window.scrollTo({ top: Math.min(Math.max(ratio * maxScroll, 0), maxScroll), behavior: "smooth" });
  };

  const onThumbPointerDown = (event) => {
    event.preventDefault();
    dragRef.current = { active: true, startY: event.clientY, startScroll: window.scrollY };
    document.body.classList.add("is-scrollbar-dragging");
  };

  return (
    <div className="custom-scrollbar" ref={trackRef} onPointerDown={onTrackPointerDown} aria-hidden="true">
      <div
        className="custom-scrollbar-thumb"
        style={{ height: `${state.height}px`, transform: `translateY(${state.top}px)` }}
        onPointerDown={onThumbPointerDown}
      />
    </div>
  );
}
