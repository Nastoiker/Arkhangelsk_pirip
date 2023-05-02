<script setup lang="ts">

defineProps<{
    placeholder: string,
}>()
</script>

<template>
    <input type="text" className="w-full" :placeholder="placeholder">
</template>

<style scoped>
input {
    border: none;
    border-bottom: #181818 4px solid;
}
input::placeholder {
    font-weight: bold;
    color: black;
    margin: 5px;
}
</style>
