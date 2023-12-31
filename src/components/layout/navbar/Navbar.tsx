import { getDictionary } from "@/lib/dictionary";
import { Locale } from "../../../../i18n.config";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import AnimationMove from "@/components/animations/animationMove";
import LinkSwitcher from "@/components/utils/LinkSwitcher";
const LanguageSwitcher = dynamic(
  () => import("@/components/utils/LanguageSwitcher")
);
const ThemeSwitcher = dynamic(() => import("@/components/utils/ThemeSwitcher"));

const Navbar = async ({ lang }: { lang: Locale }) => {
  const { navbar } = await getDictionary(lang);

  return (
    <AnimationMove
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 2 }}
      className="z-50"
    >
      <nav className="sticky py-5 z-50 top-0 inset-x-0   h-16">
        <div className="mx-auto max-w-[1800px]">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl  text-foreground tracking-widest">
              {navbar.logo}
            </h2>
            <div
              className={cn("flex gap-5 items-center", {
                "pl-[8vw] text-sm": lang === "en",
                "pr-[11.2vw]": lang === "ar",
              })}
            >
              <ul className={cn("flex gap-7   items-center uppercase")}>
                {navbar.navLinks.map((navigation) => (
                  <li key={navigation.id}>{navigation.label}</li>
                ))}
              </ul>
              <ul
                className={cn("flex gap-7   items-center uppercase", {
                  // "pl-[9.6vw] text-sm": lang === "en",
                  // "pr-[10.4vw]": lang === "ar",
                })}
              >
                {navbar.navLinks.map((navigation) => (
                  <li key={navigation.id}>{navigation.label}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 items-center uppercase text-white">
              <span
                className={cn("tracking-wider ", {
                  "text-sm": lang === "en",
                })}
              >
                {navbar.authenticationLinks.map((link) => (
                  <LinkSwitcher href={link.href} key={link.id} lang={lang}>
                    {link.label} {link.id === 1 ? "/ " : " "}
                  </LinkSwitcher>
                ))}
              </span>
              <ThemeSwitcher />
              <LanguageSwitcher lang={lang} />
            </div>
          </div>
        </div>
      </nav>
    </AnimationMove>
  );
};

export default Navbar;
