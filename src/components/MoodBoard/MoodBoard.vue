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
        <div class="mx-auto w-full  grid grid-cols-12 grid-rows-6 gap-5">
            <div class="  border-l-10 BorderL p-10 border-t-8 border-GreenLight col-start-1 h-full	row-start-1 row-end-1 col-end-4" >
                <HtagComponent type="h1">smdabdnm,</HtagComponent>
                <PTag class="break-words">aasdaaasdassaasdassaasdassaasdassaasdassaasdassaasdassss</PTag>
            </div>
            <img src="../../assets/gallery/longer1.jpg" class=" h-full col-start-9 h-full	row-start-1 row-end-3 col-end-13" alt="">
            <img src="../../assets/gallery/Home.jpg" class=" h-full col-start-7 	row-start-3 row-end-5 col-end-12" alt="">
            <img src="../../assets/gallery/women.jpg" class="self-end w-full col-start-2 col-end-7	row-start-3 row-end-5 col-end-12" alt="">
            <img src="../../assets/gallery/park.jpg" class=" col-start-1 col-end-4 	row-start-5 row-end-7 " alt="">
            <img src="../../assets/gallery/beach.jpg" class=" h-full col-start-4 col-end-7 row-start-5 row-end-6	" alt="">
            <img src="../../assets/gallery/beach2.jpg" class="h-full col-start-7 col-end-9 row-end-6	" alt="">
            <div class="border-b-8 p-10  BorderR border-r-8 border-GreenLight col-start-10 row-start-6 row-end-7 col-end-13">
                <HtagComponent type="h1">smdabdnm,</HtagComponent>
                <PTag class="break-words">aasdaaasdassaasdassaasdassaasdassaasdassaasdassaasdassss</PTag>
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
.BorderL {
  border-left-width: 2rem;
  border-top-width: 2rem;
}
.BorderR {
  border-right-width: 2rem;
  border-bottom-width: 2rem;
}
input {
    border: none;
    border-bottom: #181818 4px solid;
}
</style>
