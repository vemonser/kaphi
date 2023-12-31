"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, i18n } from "@/../i18n.config";

function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
      if (locale === i18n.defaultLocale) return pathname;
      return `/${locale}${pathname}`;
    } else {
      if (locale === i18n.defaultLocale) {
        const segments = pathname.split("/");
        const isHome = segments.length === 2;
        if (isHome) return "/";

        segments.splice(1, 1);
        return segments.join("/");
      }

      const segments = pathname.split("/");
      segments[1] = locale;
      return segments.join("/");
    }
  };
  return (
    <ul className="flex flex-row gap-5">
      {i18n.locales.map((locale) => (
        <li key={locale} className="">
          <Link href={redirectedPathName(locale)}>
            {lang !== locale ? locale : ""}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default LanguageSwitcher;
