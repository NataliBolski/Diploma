<script>
export default {
  data() {
    return {
      menuItems: [
        { id: 1, label: 'Главная', route: '/' },
        { id: 2, label: 'Игры', route: '/games' },
        { id: 3, label: 'О нас', route: '/about' },
        { id: 4, label: 'Покупки', route: '/purchases' }
      ]
    }
  }
}
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
      <div class="logo2"></div>
      <div class="ninoRegistration">
        <a>Log in</a>
        <a>Sing up</a>
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
  justify-content: center;
  background-color: #ffffff29;
}
.logo {
  background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec545603-cf4e-48e0-936d-5376ea12fdc0/dfki7h9-9cc91468-b3aa-4483-802e-aee67dfe229c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjNTQ1NjAzLWNmNGUtNDhlMC05MzZkLTUzNzZlYTEyZmRjMFwvZGZraTdoOS05Y2M5MTQ2OC1iM2FhLTQ0ODMtODAyZS1hZWU2N2RmZTIyOWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FBAJenHk7Ozl3vZNlfevBirRnDrP2sdAhKsnqzyImTI);
  background-size: cover;
  height: 80px;
  width: 97px;
  margin-left: 20px;
}
.logo2 {
  background-image: url(https://static.miraheze.org/rytpwiki/thumb/3/3e/%D0%9B%D1%83%D0%B8%D0%B4%D0%B6%D0%B81.png/300px-%D0%9B%D1%83%D0%B8%D0%B4%D0%B6%D0%B81.png);
  background-size: cover;
  height: 80px;
  width: 110px;
  margin-left: -30px;
}

.ninoRegistration {
  margin-top: 30px;
  margin-left: 10px;
}

nav {
  margin: 0;
  padding: 10px;
  text-align: center;
}

ul {
  list-style-type: none;
}

ul a {
  text-decoration: none;
  color: white;
  margin-right: 80px;
  margin-top: 30px;
  text-transform: uppercase;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
}

a {
  text-decoration: none;
  color: white;
  margin-right: 13px;
  text-transform: uppercase;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  transition: color 0.3s ease;
}

a:hover {
  color: black;
}
</style>
