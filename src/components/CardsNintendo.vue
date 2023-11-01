<script setup>
import { defineProps } from 'vue'
import Card from 'primevue/card'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import Button from 'primevue/button'
import { useContent } from '../composables/useContent'

const { addGameToBucket } = useContent()

defineProps({
  content: {
    type: Object,
    required: true
  }
})

function formatDate(date) {
  const _date = new Date(date.seconds * 1000)
  const year = _date.getFullYear()
  return `${year}`
}
</script>

<template>
  <Card class="gameCard">
    <template #header>
      <img class="game-image" :src="content.image" />
    </template>
    <template #title> {{ content.name }} </template>
    <template #content>
      <div class="backet">
        <Button
          class="basketBtn"
          label="Купить"
          @click="addGameToBucket(content.id, content)"
          text
        />
      </div>
      <p>Цена: {{ content.price }} тг</p>
      <p>Год выпуска: {{ formatDate(content.year) }} г</p>
      <p>Жанр: {{ content.genre }}</p>
      <Accordion :multiple="false" :activeIndex="[0]">
        <AccordionTab header="Описание:">
          <p class="m">
            {{ content.description }}
          </p>
        </AccordionTab>
      </Accordion>
    </template>
  </Card>
</template>

<style>
.game-image {
  border-radius: 20px;
  width: 470px;
  height: 220px;
}

.gameCard {
  margin: 30px;
  border-radius: 30px;
  background-color: #1d000087;
}

.p-accordion .p-accordion-header .p-accordion-header-link {
  background-color: #1d000060;
  border: #1d000098;
}

.p-accordion .p-accordion-content {
  background-color: #1d000060;
  border: #1d000060;
}

.basketBtn {
  background-color: #45a049;
  color: aliceblue;
  font-family: Montserrat;
  border-radius: 50px;
  transition: box-shadow 0.3s ease;
}

.basketBtn:hover {
  box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.785);
}
.backet {
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: -60px;
}
</style>
