<script setup lang="ts">
import HtagComponent from "@/components/Htag/HtagComponent.vue";
import InputComponent from "@/components/input/InputComponent.vue";
import PTag from "@/components/PTag/PTag.vue";

defineProps<{
    placeholder: string,
}>()
</script>

<template>
    <div className="my-20 space-y-10">
        <div class="mx-auto w-full  grid grid-cols-42 grid-rows-70">
            <div class="col-start-1 h-full	row-start-1 row-end-20 col-end-20" >
                <HtagComponent type="h1">smdabdnm,</HtagComponent>
                <PTag>aasdaaasdassaasdassaasdassaasdassaasdassaasdassaasdassss</PTag>
            </div>
            <img src="../../assets/gallery/longer1.jpg" class="col-start-38 h-full	row-start-1 row-end-6 col-end-42" alt="">
            <img src="../../assets/gallery/Home.jpg" class="col-start-7 h-full	row-start-20 row-end-40 col-end-12" alt="">
            <img src="../../assets/gallery/women.jpg" class="col-start-7 h-full	row-start-20 row-end-40 col-end-12" alt="">
            <img src="../../assets/gallery/park.jpg" class="col-start-7 h-full	row-start-40 row-end-55 col-end-12" alt="">
            <img src="../../assets/gallery/beach.jpg" class="col-start-7 h-full	row-start-40 row-end-55 col-end-12" alt="">
            <img src="../../assets/gallery/beach2.jpg" class="col-start-7 h-full	row-start-40 row-end-70 col-end-12" alt="">
            <div>
                <HtagComponent type="h1">smdabdnm,</HtagComponent>
                <PTag>aasdaaasdassaasdassaasdassaasdassaasdassaasdassaasdassss</PTag>
            </div>
        </div>
    </div>
</template>

<style scoped>
.FollowsContainer div {
    width: 40%;
}
.wrapper {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-template-rows: repeat(20, minmax(0, 1fr));
}
input {
    border: none;
    border-bottom: #181818 4px solid;
}
</style>
