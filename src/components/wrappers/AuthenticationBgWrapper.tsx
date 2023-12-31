"use client";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { ReactNode } from "react";
import { m } from "framer-motion";
import { Locale } from "../../../i18n.config";
const AuthenticationBgWrapper = ({
  children,
  lang,
}: {
  children: ReactNode;
  lang: Locale;
}) => {
  const { theme } = useTheme();

  return (
    <m.div
      initial={{ x: lang === "ar"? "-100%":"100%" }}
      animate={{ x: "0" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "flex w-2/4 h-full  backdrop-blur-md z-10 absolute top-0  bg-gradient-to-r",
        { "from-[#fff]/80 to-[#fff]/80 via-[#fff]/80": theme === "light" },
        { "from-[#000]/60 to-[#000]/60 via-[#000]/60": theme !== "light" }
      )}
    >
      {children}
    </m.div>
  );
};

export default AuthenticationBgWrapper;
