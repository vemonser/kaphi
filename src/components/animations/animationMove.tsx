"use client";
import { m } from "framer-motion";
import { ReactNode } from "react";

const AnimationMove = ({
  children,
  initial,
  animate,
  transition,
  className,
}: {
  children: ReactNode;
  initial: any;
  animate: any;
  transition: any;
  className?: string;
}) => {
  return (
    <m.div initial={initial} animate={animate} transition={transition} className={className}>
      {children}
    </m.div>
  );
};

export default AnimationMove;
