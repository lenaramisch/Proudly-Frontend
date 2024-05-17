<template>
  <div>
    <nav class="border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../assets/images/dog_logo.png" class="h-8" alt="Proudly Logo">
          <span class="self-center text-4xl font-semibold whitespace-nowrap jersey-10-regular">Proudly</span>
        </a>
        <h1 id="greeting" tag="h1" class="jersey-10-regular text-3xl">
          Welcome, QueenOfJoy!
        </h1>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div id="navbar-default" class="hidden w-full md:block md:w-auto">
          <ul class="font-semibold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a href="/login" class="jersey-10-regular text-2xl hover block py-2 px-3 rounded md:bg-transparent" aria-current="page">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div>
      <fwb-table striped class="todoList">
        <fwb-table-body>
          <fwb-table-row>
            <fwb-table-cell>Cuddle the cat</fwb-table-cell>
            <fwb-table-cell>
              <fwb-button class="p-2 m-1" color="yellow" outline><img src="../assets/icons/pen.svg" class="h-4"></fwb-button>
              <fwb-button class="p-2 m-1" color="red" outline><img src="../assets/icons/bin.svg" class="h-4"></fwb-button>
              <fwb-button class="p-2 m-1" color="green" outline><img src="../assets/icons/check.svg" class="h-4"></fwb-button>
            </fwb-table-cell>
          </fwb-table-row>
          <fwb-table-row>
            <fwb-table-cell>Implement new feature</fwb-table-cell>
            <fwb-table-cell>
              <fwb-button class="p-2 m-1" color="yellow" outline><img src="../assets/icons/pen.svg" class="h-4"></fwb-button>
              <fwb-button class="p-2 m-1" color="red" outline><img src="../assets/icons/bin.svg" class="h-4"></fwb-button>
              <fwb-button class="p-2 m-1" color="green" outline><img src="../assets/icons/check.svg" class="h-4"></fwb-button>
            </fwb-table-cell>
          </fwb-table-row>
          <fwb-table-row>
            <fwb-table-cell>Drink some coffee</fwb-table-cell>
            <fwb-table-cell>
              <fwb-button class="p-2 m-1" color="yellow" outline><img src="../assets/icons/pen.svg" class="h-4"></fwb-button>
              <fwb-button class="p-2 m-1" color="red" outline><img src="../assets/icons/bin.svg" class="h-4"></fwb-button>
              <fwb-button class="p-2 m-1" color="green" outline><img src="../assets/icons/check.svg" class="h-4"></fwb-button>
            </fwb-table-cell>
          </fwb-table-row>
        </fwb-table-body>
      </fwb-table>
      <fwb-button id="addTodoButton" color="default" outline>Add new todo</fwb-button>
    </div>
    <fwb-heading id="petName" tag="h2">YourPetName</fwb-heading>
    <img id="petImage" src="../assets/images/pet_placeholder.gif" alt="pet placehholder"/>
    
    <div class="happinessBar">
      <div class="max-w-2xl bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 m-16">
        <div class="bg-blue-600 h-2.5 rounded-full" style="width: 20%"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import {
  FwbHeading,
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableRow,
  FwbButton
} from 'flowbite-vue'


// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const name = 'IndexPage'
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');
nav {
    background-color: #829CBC;
}

.body {
    background-color: #afc8e6;
}

html {background-color: #afc8e6;}

.hover:hover {
    color: #376996;
}

#greeting {
    color: #1D3461;
    font-weight: 500;
}

.jersey-10-regular {
    font-family: "Jersey 10", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #1D3461
}

.happinessBar {
    position:fixed; 
    bottom:0%;
    left:20%;
    width:50%;
}

.todoList {
  width: 450px;
  position: fixed;
  left: 65%;
  top: 17%;
}

.todoList > * {
  height: 80px;
  
}

#addTodoButton {
  position:fixed;
  left:65%;
  top: 50%;
}

#petImage {
  position:fixed;
    left:30%;
    top: 30%;
    width:450px;
}

#petName {
  position: fixed;
  font-size: 2em;
  left: 25%;
  top: 82%;
}
</style>
