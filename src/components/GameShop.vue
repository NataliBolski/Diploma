<template>
  <Button id="buy" class="basketBtn" label="Открыть корзину" @click="fetchContent()" text />
</template>

<script setup>
import { useUser } from '../composables/useUser'
import { useContent } from '../composables/useContent'
import Button from 'primevue/button'
import { ref } from 'vue'
const contentResult = ref(null)

const { user } = useUser()
const { getContentById } = useContent()

async function fetchContent() {
  if (user.value?.bucket) {
    for (const id of user.value.bucket) {
      try {
        const result = await getContentById(id)
        contentResult.value = result
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
