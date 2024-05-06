<template>
  <NuxtPage ref="page" />
</template>

<script setup lang="ts">
import Vue, { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

</script>
