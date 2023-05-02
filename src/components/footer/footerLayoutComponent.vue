<script setup lang="ts">
import HtagComponent from "@/components/Htag/HtagComponent.vue";
import InputComponent from "@/components/input/InputComponent.vue";
import PTag from "@/components/PTag/PTag.vue";

defineProps<{
    placeholder: string,
}>()
</script>

<template>
    <footer className="md:flex bg-GreenLight sm:p-10 p-5  bottom-0 justify-between">
       <HtagComponent type="h1">
           Arkhangelsk
       </HtagComponent>
        <div>
            <HtagComponent type="h3">
                Arkhangelsk
            </HtagComponent>
            <PTag>

            </PTag>
            <PTag>

            </PTag>
        </div>
        <div>
            <HtagComponent type="h3">
                Arkhangelsk
            </HtagComponent>
            <PTag>

            </PTag>
            <PTag>

            </PTag>
        </div>
        <div>
            <HtagComponent type="h3">
                Arkhangelsk
            </HtagComponent>
            <PTag>

            </PTag>
            <PTag>

            </PTag>
        </div>

    </footer>
</template>

<style scoped>
input {
    border: none;
    border-bottom: #181818 4px solid;
}
</style>
