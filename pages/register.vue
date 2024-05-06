<template>
  <div class="padding flex justify-center">
    <div>
      <fwb-heading class="jersey-10-regular" tag="h1">
        Create your account
      </fwb-heading>
      <div>
        <!-- Input fields -->
        <input
          v-model="username"
          placeholder="Username"
        >
        <input
          v-model="petname"
          placeholder="Pet Name"
        >
      </div>
      <div>
        <!-- Buttons -->
        <router-link :to="{ path: '/login' }">
          <button>Back</button>
        </router-link>
        <router-link :to="{ path: '/' }">
          <button @click="addUser(username)">
            Register
          </button>
        </router-link>
      </div>
    </div>
    <div>
      <fwb-footer class="background-image" />
    </div>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue, { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import '../components/css/register.css'

const username = ref('')
const petname = ref('')

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const name = 'RegisterPage'
})

const axios = require('axios').default

async function addUser (username: string) {
  try {
    const response = await axios.post('/user', {
      username
    })
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

</script>
