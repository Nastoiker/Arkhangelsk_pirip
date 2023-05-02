<template>
    <component :is="type" :class="computedClass">
        <slot />
    </component>
</template>

<script>
export default {
    name: 'HtagComponent',
    props: {
        className: String,
        type: {
            type: String,
            required: true,
            validator: (value) => ['h1', 'h2', 'h3', 'h4'].includes(value),
        },
        children: String,
    },
    computed: {
        computedClass() {
            switch (this.type) {
                case 'h1':
                    return 'text-4xl font-bold ' + this.className;
                case 'h2':
                    return 'sm:text-xl font-bold ' + this.className;
                case 'h3':
                    return 'sm:text-md font-bold ' + this.className;
                case 'h4':
                    return 'text-lg font-bold ' + this.className;
                default:
                    return this.className;
            }
        },
    },
};
</script>