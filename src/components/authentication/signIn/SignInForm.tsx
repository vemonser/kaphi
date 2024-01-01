import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { signInPageTypes } from "@/@types/authentication.types";
import { Button } from "@/components/ui/button";
import LinkSwitcher from "@/components/utils/LinkSwitcher";
import { cn } from "@/lib/utils";
import AnimationMove from "@/components/animations/animationMove";

const SignInForm = ({ signIn, lang }: signInPageTypes) => {
  return (
    <section className="w-full flex justify-center  items-center flex-col  relative">
      <AnimationMove
        initial={{ opacity: "0" }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut", delay: 1 }}
      >
     
           <AnimationMove
          initial={{ scaleY: "0" }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 1.3 }}
          className={cn(
            "invisible lg:visible absolute w-0 h-4/5 border-r  top-[10%] border-muted-foreground origin-top  ",
            { "left-[7%]": lang === "en" },
            { "right-[7%]": lang === "ar" }
          )}
        /> 

        <h1 className=" text-4xl flex w-full items-center justify-center py-10">
          {signIn.welcomeBack}
        </h1>
        <div className="md:w-[35vw] w-[80vw]   flex flex-col gap-5  lg:gap-12 ">
          <div className="flex flex-col flex-1  ">
            <Label>{signIn.emailLabel}</Label>
            <Input type="email" placeholder={signIn.emailPlaceHolder} />
          </div>
          <div className="flex flex-col flex-1  ">
            <Label>{signIn.passwordLabel}</Label>
            <Input type="password" />
          </div>
          <div className="w-full flex flex-col gap-3 justify-center items-center">
            <Button className="text-background text-base" size={"lg"}>
              {signIn.signInButton}
            </Button>
            <p className="flex gap-1 capitalize">
              {signIn.notUser}
              <LinkSwitcher lang={lang} className="underline" href={"/sign_in"}>
                {signIn.createAccount}
              </LinkSwitcher>
            </p>
          </div>
        </div>
      </AnimationMove>
    </section>
  );
};

export default SignInForm;
