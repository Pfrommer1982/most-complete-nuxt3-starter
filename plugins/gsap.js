import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('gsap', gsap);
  nuxtApp.provide('ScrollTrigger', ScrollTrigger);
});
