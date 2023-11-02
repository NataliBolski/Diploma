<template>
  <div id="home" class="sliderCont" :class="{'scrolled': isScrolled}">
    <div class="slider">
      <div class="slides" :style="{ transform: 'translateX(' + -currentIndex * 100 + '%)' }">
        <div class="slide" v-for="(slide, index) in slides" :key="index">
          <img :src="slide" alt="Slide" />
        </div>
      </div>
      <button @click="prevSlide" class="pi pi-chevron-left"></button>
      <button @click="nextSlide" class="pi pi-chevron-right"></button>
    </div>
    <div class="bottomText" v-show="isScrolled">
      <p>Добро пожаловать!</p>
    </div>
  </div>
</template> 

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const scrollThreshold = 40; 
const transformValue = 30; 
const handleScroll = () => {
  isScrolled.value = window.scrollY > scrollThreshold;
  
  const transformOffset = isScrolled.value ? transformValue : 0;
  const translateY = `translateY(-${transformOffset}%)`;
  document.querySelector('.sliderCont').style.transform = translateY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

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
.sliderCont.scrolled {
  transform: translateY(-30%) !important;
  transition: transform 2s ease;
}
.sliderCont {
  z-index: -1;
  margin: 0 auto;
  width: 80%;
  height: 80%;
  margin-top: 100px;
  transition: transform 2s ease;
}

.slides {
  width: 100%;
  display: flex;
  transition: transform 0.5s ease-in-out;
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

.slide {
  flex: 0 0 100%;
}

img {
  width: 100%;
  height: 650px;
}

.bottomText {
  color: white;
  text-align: center;
  padding: 10px 20px;
  border-radius: 5px;
  display: block;
  opacity: 0; 
  animation: fadeIn 2s ease forwards; /* Длительность 1 секунда */
  transition: opacity 2s ease;
  margin-top: 60px;
  font-family: Montserrat;
  margin-bottom: -270px;
  font-size: 45px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
