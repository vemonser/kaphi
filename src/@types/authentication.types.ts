import { Locale } from "../../i18n.config";

export interface SignUpPageTypes  {
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
    lang: Locale
   };