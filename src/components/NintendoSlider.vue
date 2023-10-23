<template>
  <div class="sliderCont">
    <div class="slider">
      <div class="slides" :style="{ transform: 'translateX(' + -currentIndex * 100 + '%)' }">
        <div class="slide" v-for="(slide, index) in slides" :key="index">
          <img :src="slide" alt="Slide" />
        </div>
      </div>
      <button @click="prevSlide" class="pi pi-chevron-left"></button>
      <button @click="nextSlide" class="pi pi-chevron-right"></button>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const slides = ref([
  'https://kumundra.com/wp-content/uploads/2023/03/1677694615_Insider-Claims-Switch-2-sera-annonce-cette-annee.jpg',
  'https://4pda.to/s/as6yz0hOpVsxDASQU4ZSJxpFhz1tZa.jpg',
  'https://www.allround-pc.com/wp-content/uploads/2021/07/Nintendo-Switch-OLED-Modell-Konsole-1.jpg',
  'https://assetsio.reedpopcdn.com/nintendo-switch-pro_2TAPP3I.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp'
])
const currentIndex = ref(0)

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
}

function prevSlide() {
  currentIndex.value = currentIndex.value > 0 ? currentIndex.value - 1 : slides.value.length - 1
}
</script>

<style scoped>
.sliderCont {
  margin: 0 auto;
  width: 80%;
  height: 80%;
}

.pi {
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 30px;
  border-radius: 100%;
  padding: 10px;
  background-color: #271f1f;
}

.slider {
  text-align: center;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.slides {
  width: 100%;
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  flex: 0 0 100%;
}

img {
  width: 100%;
  height: 650px;
}
</style>
