declare module 'react-i18next' {
    interface CustomTypeOptions {
      defaultNS: 'translation';
      resources: {
        translation: typeof import('./i18n')['resources']['en']['translation'];
      };
    }
  }
  