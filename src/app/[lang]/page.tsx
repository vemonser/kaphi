import Image from "next/image";
import { Locale } from "../../../i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { cn } from "@/lib/utils";
import HomeImg from "../../../public/images/home/home.png";
export default async function Home({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  const { page } = await getDictionary(lang);
  const { home } = page;

  return (
    <main className="flex min-h-[80vh] flex-col justify-center container ">
      <Image src={HomeImg} alt="home image" fill />
      <div className="z-10">
        <h1
          className={cn(
            "  uppercase   ",
            { "font-beINNormal text-8xl w-[45vw]": lang === "ar" },
            { "text-8xl font-poppins font-black w-3/4": lang === "en" }
          )}
        >
          {home.title}
        </h1>
        <p
          className={cn(
            "  uppercase pt-5 text-2xl w-2/6 opacity-50",
            { "font-beINNormal   ": lang === "ar" },
            { " font-poppins font-black  ": lang === "en" }
          )}
        >
          {home.subTitle}
        </p>
      </div>
    </main>
  );
}
