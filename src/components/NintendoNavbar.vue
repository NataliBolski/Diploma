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

.ninoNavbar {
  background-image: url(https://4pda.to/s/as6yz0hOpVsxDASQU4ZSJxpFhz1tZa.jpg);
  width: 100%;
  height: 1000px;
  background-size: cover;
}

.nav {
  padding-top: 5px;
  display: flex;
  justify-content: space-between;
  height:100px;
  background-size: cover;
  background-image: url(../assets/navbar_back.jpeg);
}
.logo {
  background-size: cover;
  height: 70px;
  width: 60px;
  margin-left: 20px;
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
  margin-right: 80px;
  text-transform: uppercase;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
}

a:hover {
  color: black;
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
  color: black;
}

.p-button-label {
  font-weight: 600;
}



</style>
