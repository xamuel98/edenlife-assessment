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
        <img :src="imageSource" :alt="`Dog Image ${index}`" class="">
    </div>
</template>

<style scoped lang="scss">
img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    border-radius: 10px;
}
</style>