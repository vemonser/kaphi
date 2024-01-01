import svgImage from "@/../public/images/auth/authImg.svg";
import Image from "next/image";
import dynamic from "next/dynamic";
import type { SignUpPageTypes } from "@/@types/authentication.types";
import AuthenticationBgWrapper from "@/components/wrappers/AuthenticationBgWrapper";
import CircleAnimation from "@/components/animations/CircleAnimation";

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
      <CircleAnimation />
      <AuthenticationBgWrapper lang={lang}>
        <SignUpForm signUp={signUp} lang={lang} />
      </AuthenticationBgWrapper>
    </>
  );
};

export default SignUpPage;
