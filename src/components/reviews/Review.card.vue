<script setup lang="ts">
import HtagComponent from "@/components/Htag/HtagComponent.vue";

defineProps<{
    title: string,
    description: string;
    img: string;
}>()
</script>

<template>
    <div class="">
        <img src={{img}} className="rounded-full" alt="pictureCardTour">
        <div>
            <div>
                <HtagComponent>{{title}}</HtagComponent>
                <Ptag>{{description}}</Ptag>
            </div>
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
