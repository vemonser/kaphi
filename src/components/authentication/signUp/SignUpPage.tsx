import svgImage from "@/../public/images/auth/authImg.svg";
import Image from "next/image";
import dynamic from "next/dynamic";
import type { SignUpPageTypes } from "@/@types/authentication.types";
import AuthenticationBgWrapper from "@/components/wrappers/AuthenticationBgWrapper";
 const SignUpForm = dynamic(() => import("./SignUpForm"));

const SignUpPage = ({ signUp, lang }: SignUpPageTypes) => {
  return (
    <>
      <Image
        src={svgImage}
        fill
        alt="background image"
        className="object-cover"
      />
      <span className="h-full aspect-square rounded-full absolute top-0 left-1/4 z-10 border border-muted-foreground opacity-50" />
      <span className="h-1/2 aspect-square rounded-full absolute left-[37%] top-1/4 z-10 border border-muted-foreground opacity-50" />
      <AuthenticationBgWrapper>
        <SignUpForm signUp={signUp} lang={lang} />
      </AuthenticationBgWrapper>
    </>
  );
};

export default SignUpPage;
