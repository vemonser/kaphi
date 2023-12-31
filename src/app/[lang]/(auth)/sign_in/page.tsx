import SignInPage from "@/components/authentication/signIn/SignInPage";
import { Locale } from "../../../../../i18n.config";
import { getDictionary } from "@/lib/dictionary";

const SignUp = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { page } = await getDictionary(lang);
  const { signIn } = page;
  return <SignInPage signIn={signIn} lang={lang} />;
};

export default SignUp;
