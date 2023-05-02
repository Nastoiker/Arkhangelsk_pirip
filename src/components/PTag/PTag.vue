<template>
    <p  :class="className">
        <slot />
    </p>
</template>

<script>
export default {
    name: 'PTag',
    props: {
        className: String,
        children: String,
    },
};
</script>