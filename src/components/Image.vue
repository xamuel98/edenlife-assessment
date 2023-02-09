<script setup>
const props = defineProps({
    items: {
        type: Array,
        required: true,
        default: () => ([])
    }
})
</script>

<template>
    <div class="col-span-1" v-for="(imageSource, index) in props.items" :key="index">
        <img :src="imageSource" alt="">
    </div>
</template>

<style>

</style>