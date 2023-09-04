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
        "Auth.form.welcome.subtitle": "Log in to your account",
        "app.components.LeftMenu.navbrand.title": "WON GAMES",
        "app.components.LeftMenu.navbrand.workplace": "by oliveiraFreddie",
        "app.components.HomePage.welcome.again": "Bem vindo a Won Games! 👋",
        "app.components.HomePage.welcomeBlock.content.again":
          "Ao lado você pode inserir diferentes jogos, categorias e publishers para a nossa maravilhosa loja de jogos!",
      },
    },
    theme: {
      dark: {
        colors: {
          primary100: "#030415",
          primary600: "#f231a5",
          primary700: "#f231a5",
          neutral0: "#0d102f",
          neutral100: "#030415",
        },
      },
    },
    locales: [],
    bootstrap() {},
  },
};
