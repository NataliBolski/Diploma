<template>
  <Button class="basketBtn" label="Открыть корзину" @click="fetchContent()" text />
</template>

<script setup>
import { ref } from 'vue'
import { useUser } from '../composables/useUser'
import { useContent } from '../composables/useContent'
import Button from 'primevue/button'

const { user } = useUser()
const { getContentById } = useContent()
const contentResult = ref(null)

const fetchContent = async () => {
  if (user && user.value.bucket) {
    const bucketValues = [...user.value.bucket]
    for (let i = 0; i < bucketValues.length; i++) {
      try {
        const id = bucketValues[i]
        console.log(`какой ID: ${id}`)
        const result = await getContentById(id)
        console.log(`что там есть ID ${id}:`, result)
        contentResult.value = result
      } catch (error) {
        console.error(error)
      }
    }
  } else {
    console.log('пустая')
  }
}
</script>


