"use client";
import { m } from "framer-motion";

const CircleAnimation = () => {
  return (
    <svg
      width="100%"
      height="100%"
      className="absolute top-0 z-10 "
      viewBox="0 0 15 15"
      fill="green "
      xmlns="http://www.w3.org/2000/svg"
    >
      <m.path
        initial={{ strokeDasharray: "0.1px", opacity: 0 }}
        animate={{ strokeDasharray: "50px", opacity: 0.4 }}
        transition={{ duration: 2 }}
        d="M0.877075 7.49991C0.877075 3.84222 3.84222 0.877075 7.49991 0.877075C11.1576 0.877075 14.1227 3.84222 14.1227 7.49991C14.1227 11.1576 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1576 0.877075 7.49991ZM7.49991 1.82708C4.36689 1.82708 1.82708 4.36689 1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49991C13.1727 4.36689 10.6329 1.82708 7.49991 1.82708Z"
        fill="transparent"
        className="stroke-muted-foreground  "
        strokeWidth={2}
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></m.path>
    </svg>
  );
};

export default CircleAnimation;
