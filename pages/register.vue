<template>
  <div class="padding flex justify-center">
    <div>
      <h1 class="jersey-10-regular" tag="h1">
        Create your account
      </h1>
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
  </div>
  <fwb-footer sticky class="background-image" />
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue, { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import { FwbFooter } from 'flowbite-vue'

const username = ref('')
const petname = ref('')

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const name = 'RegisterPage'
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');

.body {
    display: block; 
    margin: 2em;
    margin-top: 4em;
}

.jersey-10-regular {
    font-family: "Jersey 10", sans-serif;
    font-weight: 400;
    font-size: 40px;
    font-style: normal;
}

html {
    background-color: #afc8e6;
}

.background-image {
    background-image: url("../assets/images/dog_bg.png");
    background-repeat:repeat-x;
    background-color: transparent;
    border-color: transparent;
    background-size: 70px 70px;
    background-position: center center;
    padding: 1em;
    filter: grayscale(100%);
    opacity: 0.5;
}

.padding {
    padding: 12em;
}

input {

    position: relative;
    cursor: text;
    font-size: 14px;
    line-height: 20px;
    padding: 0 16px;
    height: 48px;
    background-color: #829CBC;
    border: 1px solid #1D3461;
    border-radius: 3px;
    color: #1D3461;
    box-shadow: inset 0 1px 4px 0 #1D3461;
    overflow: hidden;
    transition: all 100ms ease-in-out;
    width: 100%;
    margin-bottom: 1em;
}
input:focus {
    border-color: lightblue;
    box-shadow: 0 1px 0 0 rgb(76, 76, 166);
}

button {

    outline: 0;
    grid-gap: 8px;
    align-items: center;
    background-color: #829CBC;
    color: #1D3461;
    border: 1px solid #1D3461;
    border-radius: 4px;
    cursor: pointer;
    display: inline-flex;
    flex-shrink: 0;
    font-size: 14px;
    font-weight: 500;
    gap: 8px;
    justify-content: center;
    line-height: 1.5;
    overflow: hidden;
    padding: 12px 16px;
    text-decoration: none;
    text-overflow: ellipsis;
    transition: all .14s ease-out;
    white-space: nowrap;
    margin-right: 1em;
    box-shadow: inset 0 1px 4px 0 #1D3461;
}
button:hover {
    box-shadow: 4px 4px 0 #1D3461;
    transform: translate(-4px,-4px);
}
button:focus-visible{
outline-offset: 1px;
}
input::placeholder {
    color: #1D3461;
    opacity: 0.5;
}

#midPlacement {
    position: absolute;
    left: 20%;
    margin-left: -20px;
    padding-top: 1%;
}

#center {
    position: absolute;
    margin: auto;
    width: 50%;
    border: 10% solid green;
    padding: 10%;
}

fwb-footer {
    position:fixed;
    left:0px;
    bottom:0px;
    height:50px;
    width:100%;
}
</style>
