import { i18n } from "@/../i18n.config";
import Link from "next/link";
import React from "react";

type LinkSwitcherProps = {
  href: string;
  lang: string;
  children: React.ReactNode;
  [key: string]: any;
};

const LinkSwitcher = ({ href, lang, ...props }: LinkSwitcherProps) => {
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`;

  return <Link href={path} {...props} />;
};

export default LinkSwitcher;
