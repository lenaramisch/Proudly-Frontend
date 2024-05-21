<template>
  <NuxtPage ref="page" />
</template>

<script setup lang="ts">
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

</script>

<style>
@import url("primevue/resources/themes/aura-light-green/theme.css");
</style>
