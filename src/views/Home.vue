<script setup>
import TheHeader from '../components/TheHeader.vue';
import ImageMasonry from '../components/ImageMasonry.vue';
import {ref} from 'vue';

let searchParams = ref('');

const clearSearchInput = () => {
    searchParams.value = '';
};
</script>

<template>
    <TheHeader v-model="searchParams" @clear="clearSearchInput" />
    <section class="mt-52">
        <div class="max-w-4xl w-full mb-10 lg:mb-28">
            <h3 class="text-2xl lg:text-5xl font-normal leading-snug">Dogs Inspo - A minimal <span class="italic">lifestyle</span> blog for dogs</h3>
        </div>
        <ImageMasonry />
    </section>
</template>

<style scoped lang="scss">

</style>
