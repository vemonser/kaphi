"use client";
import * as React from "react";
import { LazyMotion } from "framer-motion";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

const loadFeatures = () => import("./features").then((res) => res.default);

function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <LazyMotion features={loadFeatures}>{children}</LazyMotion>
    </NextThemesProvider>
  );
}

export default Providers;
