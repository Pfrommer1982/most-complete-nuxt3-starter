<template>
  <div>
    <v-btn  size="x-large" @click="switchLanguage" class="btn elevation-6">
      <div class="flag">
        <img :src="currentFlagSrc" :alt="currentFlagAlt" class="flagImage " />
      </div>
    </v-btn>
  </div>
</template>

<script setup>
import { computed } from 'vue';

import englishFlag from '@/assets/images/English.png';
import dutchFlag from '@/assets/images/Nederlands.png';

const { locale, setLocale } = useI18n();

const switchLanguage = () => {
  const newLocale = locale.value === 'en-US' ? 'nl-NL' : 'en-US';
  setLocale(newLocale);
};

const currentFlagSrc = computed(() => {
  return locale.value === 'en-US' ? dutchFlag : englishFlag;
});

const currentFlagAlt = computed(() => {
  return locale.value === 'en-US' ? 'Nederlands' : 'English';
});
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.flag {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flagImage {
  width: 48px;
  height: 48px;
}
</style>
