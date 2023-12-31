import { Locale } from "../../i18n.config";

export interface SignUpPageTypes {
  signUp: {
    title: string;
    emailPlaceHolder: string;
    firstNamePlaceHolder: string;
    lastNamePlaceHolder: string;
    emailLabel: string;
    firstNameLabel: string;
    lastNameLabel: string;
    birthdayLabel: string;
    dayPlaceHolder: string;
    monthPlaceHolder: string;
    yearPlaceHolder: string;
    passwordLabel: string;
    confirmationPasswordLabel: string;
    signUpButton: string;
    haveAccount: string;
    createAccount: string;
  };
  lang: Locale;
}
export interface signInPageTypes {
  signIn: {
    welcomeBack: string;
    emailLabel: string;
    emailPlaceHolder: string;
    passwordLabel: string;
    signInButton: string;
    notUser: string;
    createAccount: string;
  };
  lang: Locale;
}
