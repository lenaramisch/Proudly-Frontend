<template>
  <div class="body">
    <div>
      <img class="p-14 heading h-auto max-w-full" src="../components/images/proudly_heading.png" alt="image description">
      <p style="text-align: center" class="jersey-10-regular text-lg text-gray-900">
        From Tasks to Tail Wags
      </p>
      <div class="login">
        <div class="mb-5">
          <input id="base-input" class="input" placeholder="Username" type="text">
        </div>
        <div class="midPlacement">
          <router-link :to="{ path: '/' }">
            <button class="button">Login</button>
          </router-link>
          <router-link :to="{ path: '/register' }">
            <button class="button">New User</button>
          </router-link>
        </div>
      </div>
    </div>
    <fwb-footer class="background-image" />
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue, { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import '../components/css/login.css'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const name = 'LoginPage'
})
</script>
