<template>
  <div class="main">
    <h1 ref="title">{{ $t('intro-title') }}</h1>
    <div class="icons" ref="icons">
      <a
        href="https://nuxt.com"
        target="_blank"
        rel="noopener noreferrer"
        class="icon-link"
      >
        <v-btn size="small" class="icon-btn">
          <v-tooltip activator="parent" location="top">
            <template #default>
              <span>https://nuxt.com</span>
            </template>
          </v-tooltip>
          <v-icon>mdi-nuxt</v-icon>
        </v-btn>
      </a>
      <a
        href="https://nuxt.com/modules/i18n"
        target="_blank"
        rel="noopener noreferrer"
        class="icon-link"
      >
        <v-btn size="small" class="icon-btn">
          <v-tooltip activator="parent" location="top">
            <template #default>
              <span>https://nuxt.com/modules/i18n</span>
            </template>
          </v-tooltip>
          <v-icon>mdi-translate</v-icon>
        </v-btn>
      </a>
      <a
        href="https://vuetifyjs.com"
        target="_blank"
        rel="noopener noreferrer"
        class="icon-link"
      >
        <v-btn size="small" class="icon-btn">
          <v-tooltip activator="parent" location="top">
            <template #default>
              <span>https://vuetifyjs.com</span>
            </template>
          </v-tooltip>
          <v-icon>mdi-vuetify</v-icon>
        </v-btn>
      </a>
      <a
        href="https://sass-lang.com"
        target="_blank"
        rel="noopener noreferrer"
        class="icon-link"
      >
        <v-btn size="small" class="icon-btn">
          <v-tooltip activator="parent" location="top">
            <template #default>
              <span>https://sass-lang.com</span>
            </template>
          </v-tooltip>
          <v-icon>mdi-sass</v-icon>
        </v-btn>
      </a>
      <a
        href="https://firebase.google.com"
        target="_blank"
        rel="noopener noreferrer"
        class="icon-link"
      >
        <v-btn size="small" class="icon-btn">
          <v-tooltip activator="parent" location="top">
            <template #default>
              <span>https://firebase.google.com</span>
            </template>
          </v-tooltip>
          <v-icon>mdi-firebase</v-icon>
        </v-btn>
      </a>
      <a
        href="https://gsap.com"
        target="_blank"
        rel="noopener noreferrer"
        class="icon-link"
      >
        <v-btn size="small" class="icon-btn">
          <v-tooltip activator="parent" location="top">
            <template #default>
              <span>https://gsap.com</span>
            </template>
          </v-tooltip>
          <p>GSAP</p>
        </v-btn>
      </a>
    </div>

    <div ref="switcher" class="switcher">Click to switch language</div>
    <LangSwitcher class="langswitcher" />
    <div class="text">
      {{ $t('example-text') }}
    </div>

    <footer>
      Connect with me on
      <a
        href="https://github.com/Pfrommer1982"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
      >
        <v-icon>mdi-github</v-icon>
      </a>
      or
      <a
        href="https://www.linkedin.com/in/christoph-pfrommer/"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
      >
        <v-icon>mdi-linkedin</v-icon>
      </a>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

const title = ref(null);
const switcher = ref(null);
const icons = ref(null);

onMounted(() => {
  gsap.fromTo(
    title.value,
    { y: -200, opacity: 0 },
    { y: -100, opacity: 1, duration: 1, ease: 'bounce.out' }
  );
  gsap.fromTo(
    switcher.value,
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.3)', delay: 0.5 }
  );

  const iconsChildren = icons.value.children;
  gsap.fromTo(
    iconsChildren,
    { scale: 0, opacity: 0 },
    {
      scale: 1.5,
      opacity: 1,
      duration: 1,
      ease: 'back.out(1.7)',
      stagger: 0.3,
      delay: 0.5,
    }
  );
});
</script>

<style lang="scss" scoped>
@import '../assets/main.scss';

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 90vh;
  padding: 2rem;
}

h1 {
  margin: 2rem;
  transform: translateY(-10rem);
}

.icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  max-width: 600px;
  transform: translateY(-5rem);
}

.icon-link {
  text-decoration: none;
  color: inherit;
}

.social-link {
  text-decoration: none;
  color: inherit;
  margin: 0 1rem;
  font-size: larger;
}

.icon-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
}

.switcher {
  margin-bottom: 1rem;
}

.langswitcher {
  margin-bottom: 2rem;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 20px;
  background-color: grey;
  padding: 20px;
}

@media (max-width: 768px) {
  .icons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    width: 100%;
    margin-bottom: -2rem;
  }

  h1 {
    font-size: larger;
  }

  .icon-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: none;
  }

  .icon-btn {
    width: 50%;
    max-width: none;
    margin-bottom: 0.5rem;
  }


}
</style>
