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
