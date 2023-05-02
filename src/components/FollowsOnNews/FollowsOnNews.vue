<script setup lang="ts">
import HtagComponent from "@/components/Htag/HtagComponent.vue";
import InputComponent from "@/components/input/InputComponent.vue";

defineProps<{
    placeholder: string,
}>()
</script>

<template>
    <div className="FollowsContainer md:flex justify-around items-center my-20">
        <div className="w-full">
            <HtagComponent className="text-5xl" type="h1">
                Подпишитесь на рассылку актуальных новостей Архангельска
            </HtagComponent>
        </div>
        <hr />
      <div class="min-width-[50%]">
          <InputComponent placeholder="email"/>
      </div>
    </div>
</template>

<style scoped>
  .FollowsContainer div {
      width: 40%;
  }
input {
    border: none;
    border-bottom: #181818 4px solid;
}
</style>
