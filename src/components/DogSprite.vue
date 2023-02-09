<script setup>
import DogImage from '../assets/images/dog-sprite.png?url';
</script>

<template>
    <div class="absolute bottom-0">
        <div class="dog-marquee">
            <div class="dog-marquee-item" v-for="n in 20" :key="n">
                <img :src="DogImage" :alt="`Pixelated Dog Sprite ${n}`">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.dog-marquee {
    display: flex;
    animation: scrolling 20s linear infinite;

    &-item {
        flex: 0 0 16vw;
        margin: 0 1vw;
        @media (min-width: 992px) {
            flex: 0 0 5vw;
        }

        img {
            display: block;
            width: 100%;
        }
    }
}

@keyframes scrolling {
  0% { transform: translateX(0); }
  100% { transform: translatex(-144vw); }
}
</style>