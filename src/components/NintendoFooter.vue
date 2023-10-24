<template>
    <div class="msgBtn">
        <Button link><i class="pi pi-telegram"></i></Button>   
        <Button link><i class="pi pi-whatsapp"></i></Button>
        <Button link><i class="pi pi-twitter"></i></Button>
        </div>
</template>

<script setup>
 import Button from 'primevue/button';
 import 'primeicons/primeicons.css'
</script>

<style>
.msgBtn {
    padding: 20px;
    margin-top: 25px;
    text-align: center;
}

.msgBtn .pi {
    font-size: 40px;
    color: white;
    transition: color 0.3s ease;
}

.msgBtn .pi:hover{
    color: rgb(0, 0, 0);
}
</style>