<template>
  <div class="aboutCont">
    <img
    id="mario"
    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec545603-cf4e-48e0-936d-5376ea12fdc0/dfki7h9-9cc91468-b3aa-4483-802e-aee67dfe229c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VjNTQ1NjAzLWNmNGUtNDhlMC05MzZkLTUzNzZlYTEyZmRjMFwvZGZraTdoOS05Y2M5MTQ2OC1iM2FhLTQ0ODMtODAyZS1hZWU2N2RmZTIyOWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FBAJenHk7Ozl3vZNlfevBirRnDrP2sdAhKsnqzyImTI"
  />
    <Card class="aboutCard">
      <template #content>
        <p class="m-0">
          Японская компания, специализирующаяся на создании видеоигр и игровых систем. Основана в
          1889 году ремесленником Фусадзиро Ямаути:
        </p>
        <ul class="ninoLi">
          <li>в 1977 году выпустила Color TV-Game, свою первую игровую приставку</li>
          <li>
            в 1981 году компания получила международное признание после выпуска игры Donkey Kong
          </li>
          <li>
            в 1985 году игровык системы Nintendo Entertainment System и игры Sulier Mario Bros
          </li>
          <li>
            С тех пор Nintendo выпустила несколько самых успешных игровых систем, таких как Game
            Boy, Sulier Nintendo Entertainment System, Nintendo DS, Wii и Nintendo Switch.
          </li>
        </ul>
      </template>
    </Card>
    <img id="luidji" src="https://www.pngall.com/wp-content/uploads/12/Luigi-PNG-Free-Image.png" />
  </div>
</template>

<script setup>
import Card from 'primevue/card'
</script>

<style>
.aboutCard {
  font-size: 20px;
  font-family: Montserrat;
  display: flex;
  justify-content: space-between;
  background-color:  #1d000087;
  border-radius: 50px;
  width: 1000px;
  padding-left: 50px;
  padding-right: 50px;
  margin: 0 auto;
  margin-top: 200px;
}
#mario {
  width: 270px;
  height: 630px;
  margin-top: 110px;
  position: absolute;
  left: 140px;
}

.ninoLi li {
  margin-top: 20px;
    list-style-type: disclosure-closed;

}

.aboutCont{
  display:  flex;
  justify-content: space-between;
  margin-bottom: 150px;
}

#luidji{
  position: absolute;
  width: 270px;
  height: 650px;
  left: 1270px;
  margin-top:90px;
}
</style>
