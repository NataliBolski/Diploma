<script setup>
import NintendoNavbar from './components/NintendoNavbar.vue'
import NintendoSlider from './components/NintendoSlider.vue'
import NintendoFooter from './components/NintendoFooter.vue'
import GamesNintendo from './components/GamesNintendo.vue'
import NintendoAddBtn from './components/NintendoAddBtn.vue'
import AboutNintendo from './components/AboutNintendo.vue'
import NintendoProm from './components/NintendoProm.vue'
import GameShop from './components/GameShop.vue'
import { onMounted } from 'vue'
import { useUser } from './composables/useUser'

const { getUserFromLocalStorage } = useUser()

onMounted(() => {
  getUserFromLocalStorage()
})
</script>

<template>
  <NintendoNavbar />
  <NintendoSlider />
  <NintendoFooter />
  <GamesNintendo />
  <NintendoAddBtn />
  <AboutNintendo />
  <NintendoProm />
  <GameShop />

</template>

<style scoped>
*{
  scroll-behavior: smooth;
}
</style>
