import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import { defineNuxtConfig } from 'nuxt/config';
import { ViteConfig } from 'nuxt/schema';


export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config: ViteConfig) => {
    
        if (config.plugins) {
          config.plugins.push(vuetify({ autoImport: true }));
        } else {
          config.plugins = [vuetify({ autoImport: true })];
        }
      });
    },
  ],

  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en-US',
        iso: 'en-US',
        name: 'English',
        file: 'en-US.json',
      },
      {
        code: 'nl-NL',
        iso: 'nl-NL',
        name: 'Nederlands',
        file: 'nl-NL.json',
      },
    ],
  },

  plugins: ['~/plugins/firebase.js', '~/plugins/gsap.js'],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  css: ['@/assets/main.scss'],
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ]
    }
  }

});
