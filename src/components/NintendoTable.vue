<template> 
    <DataTable :value="gameListRemake" :loading="loading.gameList"> 
      <Column v-for="column in gameColumns" :key="column.field" :field="column.field" :header="column.header"> 
      </Column> 
    </DataTable> 
  </template> 
   
  <script setup> 
  import { onMounted} from 'vue' 
  import DataTable from 'primevue/datatable' 
  import Column from 'primevue/column' 
  import {useContent} from '../composables/useContent' 
   
  const {getGameList, loading, gameListRemake} = useContent();  
   
  onMounted(() => { 
    getGameList();  
  }) 
   
  const gameColumns = [  
    { field: 'id', header: '#' }, 
    { field: 'name', header: 'Name' }, 
    { field: 'price', header: 'Price' }, 
    { field: 'year', header: 'Year'}, 
  ] 
  </script>
  
  <style scoped>
   :deep(.p-disabled) {
    opacity: 1 !important;
   }
  </style>