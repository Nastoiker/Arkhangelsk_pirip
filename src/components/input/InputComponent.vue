<script setup lang="ts">

defineProps<{
    placeholder: string,
}>()
</script>

<template>
    <input type="text" className="w-full py-5 bg-transparent" :placeholder="placeholder">
</template>

<style scoped>
input {
    border: none;
    border-bottom: #181818 4px solid;
  background: transparent;
}
input::placeholder {
  font-size: 2rem;
    font-weight: bold;
    color: black;
    margin: 5px;
}
</style>
