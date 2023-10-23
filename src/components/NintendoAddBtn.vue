<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import { useContent } from '@/composables/useContent'
import Calendar from 'primevue/calendar'
import Textarea from 'primevue/textarea'

const {uploadImage, addContent, newContent } = useContent()
const visible = ref(false)

async function add() {
  await addContent()
  visible.value = false
}

function clear() {
  newContent.value = {
    author: '',
    name: '',
    price: 0,
    year: '',
    description: ''
  }
}

async function onUpload(e) {
    const image = e.target.files[0]
    await uploadImage(image)
  }


</script>

<template>
  <Button label="Show" icon="pi pi-external-link" @click="visible = true" />
  <Dialog v-model:visible="visible" modal header="Добавить игру" :style="{ width: '30vw' }">
    <div class="card flex flex-column align-items-center gap-3">
      <InputText
        v-model="newContent.author"
        type="text"
        placeholder="Введите ваше имя"
        style="margin-top: 10px; margin-bottom: 10px; width: 100%"
      />
    </div>
    <div class="p-field">
      <label for="price">Название игры:</label>
      <InputText
        style="margin-top: 10px; margin-bottom: 10px; width: 100%"
        id="name"
        v-model="newContent.name"
        mode="currency"
        locale="ru-ru"
      />
    </div>
    <div class="p-field">
      <label for="price">Цена:</label>
      <InputNumber
        style="margin-top: 10px; margin-bottom: 10px; width: 100%"
        id="price"
        v-model="newContent.price"
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
        v-model="newContent.year"
        view="year"
        dateFormat="yy"
      />
    </div>
    <span class="p-float-label">
      <Textarea
        v-model="newContent.description"
        rows="5"
        cols="30"
        style="margin-bottom: 10px; width: 100%"
      />
      <label>Описание игры</label>
    </span>
    <form class="input__wrapper" enctype="multipart/form-data">
      <input id="inputfile" class="input inputfile" name="images" type="file" accept=".jpg, .png" @input="onUpload($event)" />
      <label for="inputfile" class="inputfile-button">
        <span class="input__file-icon-wrapper">
          <img class="input__file-icon" width="25" />
        </span>
      </label>
    </form>
    <template #footer>
      <Button label="Сбросить" icon="pi pi-times" @click="clear" text />
      <Button label="Добавить" icon="pi pi-check" @click="add" autofocus />
    </template>
  </Dialog>
</template>

<style>

</style>
