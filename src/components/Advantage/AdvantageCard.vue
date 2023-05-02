<script setup lang="ts">
import HtagComponent from "@/components/Htag/HtagComponent.vue";
import PTag from "@/components/PTag/PTag.vue";

defineProps<{
    title: string,
    description: string;
    img: string;
}>()
</script>

<template>
    <div class="md:flex w-full my-10">
        <img :src="img" alt="pictureCardTour">
        <div class="p-10 bg-GreenLight w-full">
            <div>
                <HtagComponent type="h1">{{title}}</HtagComponent>
                <PTag>{{description}}</PTag>
            </div>
            <hr>
            <span></span>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}
.greetings {

}
.greetings h1,
.greetings h3 {
    text-align: center;
}

@media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
        text-align: left;
    }
}
</style>
