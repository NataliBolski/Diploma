<script setup>
import PButton from 'primevue/button';
import { useUser } from '@/composables/useUser'
import {ref} from 'vue'
const { user, googleRegister, googleLogout } = useUser()

const menuItems = ref([
        { id: 1, label: 'Главная', route: '/' },
        { id: 2, label: 'Игры', route: '/games' },
        { id: 3, label: 'О нас', route: '/about' },
        { id: 4, label: 'Покупки', route: '/purchases' }
      ])
</script> 

<template>
  <div class="ninoNavbar">
    <div class="nav">
      <div class="logo"></div>
      <div class="ninoMenu">
        <nav>
          <ul>
            <a v-for="item in menuItems" :key="item.id">
              <router-link :to="item.route">{{ item.label }}</router-link>
            </a>
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
