<template>
    <div class="msgBtn">
        <Button link><a href="https://www.instagram.com/nintendoamerica/"><i class="pi pi-instagram"></i></a></Button> 
        <Button link><a href="https://www.reddit.com/r/nintendo/"><i class="pi pi-reddit"></i></a></Button>     
        <Button link><a href="https://twitter.com/NintendoEurope"><i class="pi pi-twitter"></i></a></Button>   
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