<script setup>
import { defineProps } from 'vue'
import Card from 'primevue/card'
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

defineProps({
  content: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="gameCont">
  <Card class="gameCard">
    <template #header>
      <img class="game-image" :src="content.image"/>
    </template>
    <template #title> {{ content.name }} </template>
    <template #content>
      <p>Цена: {{ content.price }}</p>
      <p>Год выпуска: {{ content.year }}</p>
      <p>Жанр: {{ content.genre }}</p>
      <Accordion :multiple="false" :activeIndex="[0]">
        <AccordionTab header="Описание:">
            <p class="m-0">
              {{ content.description }}
            </p>
        </AccordionTab>
    </Accordion>
    </template>
  </Card>
</div>
</template>

<style>
.game-image{
  border-radius: 20px;
  width: 470px;
  height: 220px;
  margin-top: 10px;
  margin-left: 10px;
}

.gameCard {
  margin: 30px;
  border-radius: 30px;
}

</style>
