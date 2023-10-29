import Backend from "i18next-fs-backend";
    import { resolve } from "node:path";
    import pkg from "remix-i18next";
    import i18n from "~/i18n"; // The configuration file we created
    
const { RemixI18Next } = pkg;
const i18next = new RemixI18Next({
      detection: {
        supportedLanguages: i18n.supportedLngs,
        fallbackLanguage: i18n.fallbackLng,
      },
      i18next: {
        ...i18n,
        backend: {
          loadPath: resolve('./public/locales/{{lng}}/common.json'),
        },
      },
      backend: Backend,
    });
    
export default i18next;