<script setup>
import PButton from 'primevue/button';
import { onMounted } from 'vue';
import { useUser } from '@/composables/useUser';

const { user, googleRegister, googleLogout } = useUser();

onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
</script> 

<template>
  <div class="ninoNavbar">
    <div class="nav">
      <div class="logo"></div>
      <div class="ninoMenu">
        <nav>
          <ul>
            <a href="#home">Главная</a>
            <a href="#games">Игры</a>
            <a href="#about">О нас</a>
            <a href="#purchases">Покупки</a>
          </ul>
        </nav>
      </div>
      <div class="side">
        <p-button 
        class="btn"
          v-if="!user"
          type="button"
          @click="googleRegister"
          label="Войти"
          icon="pi pi-user"
          text
        ></p-button>
        <p-button
        class="btn"
          v-else
          type="button"
          @click="googleLogout"
          label="Выйти"
          icon="pi pi-sign-out"
          text 
        ></p-button>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kablammo&family=Kanit:wght@200;400&family=Montserrat:wght@400;500;600;800&family=Tilt+Neon&display=swap');



.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 5px;
  display: flex;
  justify-content: space-between;
  height: 100px;
  background-size: cover;
  background-color: #1d0000;
  z-index: 1000;
}
.logo {
  background-image: url(https://gamemag.ru/images/cache/News/News150709/496682b5b5-1_350x250.jpg);
  background-size: cover;
  height: 90px;
  width: 100px;
  margin-left: 10px;
}



nav {
  padding: 10px;
  text-align: center;
  margin-top: 10px;
}

ul {
  list-style-type: none;
}

ul a {
  text-decoration: none;
  color: white;
  margin-right: 40px;
  text-transform: uppercase;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-left: 40px;
  transition: color 0.3s ease;
}

a:hover {
  color: rgb(207, 0, 0);
}

.btn {
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  margin-top: 20px;
  margin-right: 13px;
  text-transform: uppercase;
  font-family: Montserrat;
  font-size: 17px;
  transition: color 0.3s ease;
}

.btn:hover {
  color: rgb(207, 0, 0);
}

.p-button-label {
  font-weight: 600;
}



</style>
