<script setup>
import {computed} from "vue";
import {useRoute} from 'vue-router';

const route = useRoute();

const props = defineProps({
    modelValue: {
        type: [Number, String],
        default: ""
    }
});

const emit = defineEmits(["update:modelValue", "clear"])

const searchKey = (event) => {
    emit("update:modelValue", event.target.value);
};

const clearSearchInput = () => {
    emit("clear");
};

const currentPage = computed(() => {
    return route.name;
});

</script>

<template>
    <header class="bg-white fixed w-full top-0 left-0 right-0 shadow-sm">
        <div class="w-full flex flex-wrap lg:flex-nowrap gap-5 lg:gap-0 justify-between items-center p-6">
            <router-link :to="{name: 'home'}" class="font-normal text-lg lg:text-2xl order-1">Dogs Inspo</router-link>
            <div class="max-w-2xl w-full search-box relative order-3 lg:order-2" v-if="currentPage === 'home'">
                <div class="absolute top-4 lg:top-5 left-4 select-none">
                    <Icon icon="fluent:search-24-regular" width="24" height="24" class="text-dgi-gray-dark opacity-70" />
                </div>
                <input type="text" class="bg-dgi-gray-light rounded-full h-14 w-full" @input="searchKey" :value="props.modelValue" placeholder="Search">
                <div class="absolute top-4 lg:top-5 right-4 cursor-pointer select-none" v-if="props.modelValue.length > 0" @click="clearSearchInput">
                    <Icon icon="fluent:dismiss-24-regular" width="24" height="24" class="text-dgi-gray-dark opacity-70" />
                </div>
            </div>
            <router-link :to="{name: 'about'}" :class="{'opacity-100': currentPage === 'about'}" class="text-dgi-gray-dark text-sm lg:text-base opacity-70 hover:opacity-100 transition-opacity order-2 lg:order-3">About</router-link>
        </div>
    </header>
</template>

<style scoped lang="scss">
.search-box {
    input {
        @apply px-12 py-4 lg:py-8 text-dgi-gray-dark text-base;
        outline: 0;
        box-shadow: none;
        border: 0;
        &::placeholder {
            @apply text-dgi-gray-dark text-sm lg:text-base font-normal;
        }
    }
}
</style>