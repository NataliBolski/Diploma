<template>
  <div class="games">
    <div class="card">
      <div class="trip" v-for="content in contents" :key="content.id">
        <CardsNintendo :content="content" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'
import { ref, onMounted } from 'vue'
import CardsNintendo from '@/components/CardsNintendo.vue'

const contents = ref([])

onMounted(async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'contents'))
    querySnapshot.forEach((doc) => {
      contents.value.push({
        id: doc.id,
        ...doc.data()
      })
      console.log(contents.value)
    })
  } catch (error) {
    console.error('Error getting reviews:', error)
  }
})
</script>

<style>
.card {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between; /* Выравнивание карточек по горизонтали */
    width: 100%;
  }
  
  .trip {
    width: calc(33.33% - 10px); /* Ширина карточки (33.33% минус отступ) */
  }
  

</style>
