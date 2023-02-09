<script setup>
import TheHeader from '../components/TheHeader.vue';
import DogSprite from '../components/DogSprite.vue';
</script>

<template>
    <TheHeader />
    <section class="mt-28 lg:mt-36">
        <div class="max-w-xl m-auto w-full mb-10 lg:mb-28">
            <p class="text-base lg:text-lg font-normal leading-normal text-center">
                The goal of this website is to provide resource for <span class="italic">dog lovers</span> and <span class="italic">dog owners</span>, offering images about different breeds of dogs and everything they need to know to care for and enjoy their furry companions.
            </p>
        </div>
    </section>
    <DogSprite />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
