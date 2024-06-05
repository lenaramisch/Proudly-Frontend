<template>
  <div class="padding flex justify-center">
    <div>
      <h1 class="jersey-10-regular" tag="h1">
        Create your account
      </h1>
      <div @keydown.enter="register">
        <!-- Input fields -->
        <input class="input"
          v-model="username"
          placeholder="Username"
        >
        <input type="password" class="input"
          v-model="password"
          placeholder="Password"
        >
        <input class="input"
          v-model="petname"
          placeholder="Pet Name"
        >
        <fwb-select
                v-model="selectedPetImageKey"
                :options="petImageKey"
                label="Todo Size"
            />
      </div>
      <div>
        <!-- Buttons -->
        <router-link :to="{ path: '/login' }">
          <button>Back</button>
        </router-link>
          <button @click="register">
            Register
          </button>
      </div>
    </div>
  </div>
  <fwb-footer sticky class="background-image" />
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import { FwbFooter, FwbSelect } from 'flowbite-vue'
import axios from 'axios';
import { useRouter } from 'vue-router'
import { useUserStore } from '~/stores/userdata'

const store = useUserStore();
const username = ref('')
const petname = ref('')
const password = ref('')
const router = useRouter();
const petImageKey = [
    { value: 'cat', name: 'Cat' },
    { value: 'dog', name: 'Dog' },
    { value: 'bird', name: 'Bird' },
    { value: 'turtle', name: 'Turtle' },
];
const selectedPetImageKey = ref('');

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const name = 'RegisterPage'
})

async function register() {
  store.petImageKey = selectedPetImageKey.value;
  const imageKey = store.petImageKey;
  try {
    const response = await axios.post("http://localhost:3030/register", {
      username: username.value,
      password: password.value,
      petname: petname.value,
      image_key: imageKey
    });
    if (response.status === 201) {
      alert("Account created! You can log in now")
      await router.push('/login');
      } else {
            alert("Something went wrong. Please try again!");
        }
  } catch (error) {
    console.error('Error logging in:', error);
  }
};

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
    margin-bottom: 0.2em;
}

.padding {
    padding: 12em;
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
    margin-bottom: 1em;
}
.input:focus {
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
