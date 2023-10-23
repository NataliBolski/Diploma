<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import { useContent } from '@/composables/useContent'
import Calendar from 'primevue/calendar'
import Textarea from 'primevue/textarea'

const { newGame } = useContent()
const visible = ref(false)
</script>

<template>
  <Button label="Show" icon="pi pi-external-link" @click="visible = true" />

  <Dialog v-model:visible="visible" modal header="Добавить игру" :style="{ width: '30vw'}">
    <div class="p-field" >
      <label for="price">Название игры:</label>
      <InputText
        style="margin-top: 10px; margin-bottom: 10px; width: 100%"
        id="name"
        v-model="newGame.name"
        mode="currency"
        locale="ru-ru"
      />
    </div>
    <div class="p-field">
      <label for="price">Цена:</label>
      <InputNumber
        style="margin-top: 10px; margin-bottom: 10px; width: 100%"
        id="price"
        v-model="newGame.price"
        mode="currency"
        currency="KZT"
        locale="ru-ru"
      />
    </div>
    <div class="p-field">
      <label for="year">Год:</label>
      <Calendar
        style="margin-top: 10px; margin-bottom: 10px; width: 100%"
        id="year"
        v-model="newGame.year"
        view="year"
        dateFormat="yy"
      />
    </div>
    <span class="p-float-label">
      <Textarea v-model="value" rows="5" cols="30" style=" margin-bottom: 10px; width: 100%" />
      <label>Описание игры</label>
    </span>
    <template #footer>
        <Button label="Сбросить" icon="pi pi-times" @click="addContent" text />
        <Button label="Добавить" icon="pi pi-check" @click="deleteContent" autofocus />
      </template>
  </Dialog>
</template>

<style>
</style>