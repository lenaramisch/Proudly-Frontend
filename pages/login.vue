<template>
  <div class="body">
    <div>
      <img class="p-14 heading h-auto max-w-full" src="../assets/images/proudly_heading.png" alt="image description">
      <p style="text-align: center" class="jersey-10-regular text-lg text-gray-900">
        From Tasks to Tail Wags
      </p>
      <div class="login">
        <div class="mb-5">
          <input id="base-input" class="mb-4 input" placeholder="Username" type="text">
          <input id="base-input" class="input" placeholder="Password" type="text">
        </div>
        <div class="midPlacement">
          <NuxtLink to="/">
            <button class="button">Login</button>
          </NuxtLink>
          <NuxtLink to="/register">
            <button class="button">New User</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <fwb-footer sticky class="background-image" />
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue, { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import { FwbFooter } from 'flowbite-vue'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const name = 'LoginPage'
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');

.body {
    display: block; 
    margin: 2em;
    margin-top: 4em;
    background-color: #afc8e6;
}

.heading {
    display: block; 
    margin: auto;
    margin-top: 1em;
    margin-bottom: 1em;
    width: 50%;

}

.login {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
    margin-bottom: 1em;
}

.jersey-10-regular {
    font-family: "Jersey 10", sans-serif;
    font-weight: 400;
    font-size: 40px;
    font-style: normal;
    color: #1D3461
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
    margin-bottom: 0.2em;
}

.input {

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
}
.input:focus {
    border-color: lightblue;
    box-shadow: 0 1px 0 0 #1D3461;
}

.button {

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
.button:hover {
    box-shadow: 4px 4px 0 #1D3461;
    transform: translate(-4px,-4px);
}
.button:focus-visible{
outline-offset: 1px;
}
.input::placeholder {
    color: #1D3461;
    opacity: 0.5;
}

.midPlacement {
    position: absolute;
    left: 50%;
    margin-left: -100px;
    padding-top: 1%;
}

fwb-footer {
    position:fixed;
    left:0px;
    bottom:0px;
    height:50px;
    width:100%;
}
</style>
