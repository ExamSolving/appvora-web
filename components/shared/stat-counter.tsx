"use client";

import * as React from "react";
import { animate, useInView, useMotionValue, useMotionValueEvent } from "framer-motion";

type StatCounterProps = {
  value: number;
  suffix?: string;
  className?: string;
};

export function StatCounter({ value, suffix = "", className }: StatCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = React.useState(0);

  useMotionValueEvent(motionValue, "change", (latest) => {
    setDisplay(Math.round(latest));
  });

  React.useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, value, {
      duration: 1.8,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
