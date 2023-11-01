<template>
  <div class="games">
    <div class="card">
      <div v-for="content in contentList" :key="content.id">
        <CardsNintendo :content="content" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import CardsNintendo from '@/components/CardsNintendo.vue'
import {useContent} from '../composables/useContent'

const {getAllContent, contentList} = useContent()

onMounted(async () => {
  await getAllContent()
})
</script>

<style>
.card {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between; 
    width: 100%;
    font-family: Montserrat;
  }
  
</style>
