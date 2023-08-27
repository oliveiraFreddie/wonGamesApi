import AuthLogo from "./extensions/White.svg";
import MenuLogo from "./extensions/Joystick.svg";
import favicon from "./extensions/Joystick.ico";

export default {
  config: {
    tutorials: false,
    notifications: { releases: false },
    auth: {
      logo: AuthLogo,
    },
    menu: {
      logo: MenuLogo,
    },
    head: {
      favicon: favicon,
    },
    translations: {
      en: {
        "Auth.form.welcome.title": "Bem vindo a Won Games!",
        "Auth.form.welcome.subtitle": "Log in to your Won Games account",
        "app.components.LeftMenu.navbrand.title": "WON GAMES",
        "app.components.LeftMenu.navbrand.workplace": "by oliveiraFreddie",
        "app.components.HomePage.welcome.again": "Bem vindo a Won Games! 👋",
        "app.components.HomePage.welcomeBlock.content.again":
          "Ao lado você pode inserir diferentes jogos, categorias e publishers para a nossa maravilhosa loja de jogos!",
      },
    },
    theme: {
      light: {
        colors: {
          danger100: "#FAFAFA",
          danger700: "#FAFAFA",
          neutral0: "#0A0D27",
          neutral100: "#141731",
          neutral150: "#070615",
          neutral200: "#070615",
          neutral500: "#FAFAFA",
          neutral600: "#626381",
          neutral700: "#626381",
          neutral800: "#FAFAFA",
          neutral900: "#FAFAFA",
          primary100: "#13194E",
          primary200: "#FAFAFA",
          primary500: "#bf4c69",
          primary600: "#F231A5",
          primary700: "#3CD3C1",
          secondary100: "#FAFAFA",
          success100: "#3CD3C1",
        },
      },
      dark: {
        colors: {
          primary100: "#121735",
          primary200: "#101432",
          primary500: "#F3F4F9",
          primary600: "#E1E3F0",
          primary700: "#CFCFF0",
          danger700: "#F231A5",
        },
      },
    },
    locales: [
      // "ar",
      // "fr",
      // "cs",
      // "de",
      // "dk",
      // "es",
      // "he",
      // "id",
      // "it",
      // "ja",
      // "ko",
      // "ms",
      // "nl",
      // "no",
      // "pl",
      // "pt-BR",
      // "pt",
      // "ru",
      // "sk",
      // "sv",
      // "th",
      // "tr",
      // "uk",
      // "vi",
      // "zh-Hans",
      // "zh",
    ],
    bootstrap() {},
  },
};
