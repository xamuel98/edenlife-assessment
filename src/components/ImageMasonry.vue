<script setup>
import {ref} from 'vue';
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";

import Image from './Image.vue';
import Loader from './Loader.vue';

let imageData = ref([]);
let page = 1;

const loadData = async $state => {
    console.log("loading...");

    try {
        const response = await fetch(
            "https://dog.ceo/api/breeds/image/random/50?page=" + page
        );
        const json = await response.json();
        if (json.message.length) {
            page += 1;
            imageData.value.push(...json.message);
            $state.loaded();
        } else {
            $state.complete();
        }
    } catch (error) {
      $state.error();
    }
};
</script>

<template>
    <div class="w-full grid gap-5 grid--masonry grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <Image :items="imageData" />
    </div>
    <div class="flex w-full justify-center items-center">
        <infinite-loading @infinite="loadData">
            <template #spinner>
                <Loader />
            </template>
            <template #complete>
                <span>No more data found!</span>
            </template>
        </infinite-loading>
    </div>
</template>

<style scoped lang="scss">

</style>