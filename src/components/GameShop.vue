<template>
    <OrderList v-model="products" listStyle="height:auto" dataKey="id">
        <template #header> List of Products </template>
        <template #item="slotProps">
            <div class="flex flex-wrap p-2 align-items-center gap-3">
                <img  :src="content.image"/>
                <div class="flex-1 flex flex-column gap-2">
                    <span class="font-bold">{{ content.name }}</span>
                    <div class="flex align-items-center gap-2">
                        <i class="pi pi-tag text-sm"></i>
                    </div>
                </div>
                <span class="font-bold text-900">$ {{ content.price }}</span>
            </div>
        </template>
    </OrderList>
</template>

<script setup>
import OrderList from 'primevue/orderlist';
import { useContent} from '../composables/useContent'

const { user } = useUser()
const products = ref([]);
</script>