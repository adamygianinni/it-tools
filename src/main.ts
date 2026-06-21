import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';

import { registerSW } from 'virtual:pwa-register';
import shadow from 'vue-shadow-dom';
import { plausible } from './plugins/plausible.plugin';

import 'virtual:uno.css';

import { naive } from './plugins/naive.plugin';

import App from './App.vue';
import router from './router';
import { i18nPlugin } from './plugins/i18n.plugin';

registerSW();

const app = createApp(App);

app.use(createPinia());
app.use(createHead());
app.use(i18nPlugin);
app.use(router);
app.use(naive);
app.use(plausible);
app.use(shadow);

app.mount('#app');

// Inicialização do Matomo
const _paq = window._paq = window._paq || [];
_paq.push(['enableLinkTracking']);
(function() {
  const u = "https://analytics.adamy.dev/"; // Seu link do Matomo
  _paq.push(['setTrackerUrl', u + 'matomo.php']);
  _paq.push(['setSiteId', '2']); // ID do site no Matomo
  const d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
  g.async = true; g.src = u + 'matomo.js'; s.parentNode.insertBefore(g,s);
})();
