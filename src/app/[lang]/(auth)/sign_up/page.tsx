import SignUpPage from "@/components/authentication/signUp/SignUpPage";
import { Locale } from "../../../../../i18n.config";
import { getDictionary } from "@/lib/dictionary";

const SignUp = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { page } = await getDictionary(lang);
  const { signUp } = page;
  return <SignUpPage signUp={signUp} lang={lang} />;
};

export default SignUp;
