<template>
  <div>
    <nav class="border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../assets/images/dog_logo.png" class="h-8" alt="Proudly Logo">
          <span class="self-center text-4xl font-semibold whitespace-nowrap jersey-10-regular">Proudly</span>
        </a>
        <h1 id="greeting" tag="h1" class="jersey-10-regular text-3xl">
          Welcome, {{ store.username }}!
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
              <a href="/login" class="jersey-10-regular text-2xl hover block py-2 px-3 rounded md:bg-transparent" aria-current="page" @click="logoutUser()">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    <div>
      <fwb-button id="editProfileButton" color="default" outline @click="openModal3">Edit Profile</fwb-button>
    </div>
    <EditProfilePopupForm :isOpen="isModalOpened3" @submit="submitHandler3" name="second-modal">
      <template #header>Edit Profile</template>
      <template #content>
        <fwb-input
              v-model="editedUserName"
              label="Your username"
          />
          <fwb-input
              v-model="editedPetName"
              label="Your pets name"
          />
        </template>
    </EditProfilePopupForm>
    <div>
      <NewTodoPopupForm :isOpen="isModalOpened" @submit="submitHandler" name="first-modal">
        <template #header>Create new Todo</template>
        <template #content>
          <fwb-input
                v-model="todoTitle"
                placeholder="What is on your mind?"
                label="Todo Title"
            />
            <fwb-select
                v-model="selectedSize"
                :options="todoSize"
                label="Todo Size"
            />
          </template>
      </NewTodoPopupForm>
      </div>
      <div class="todoList">
        <fwb-tabs v-model="activeTab" class="p-5">
        <fwb-tab name="first" title="Todos">
          <DataTable class="transparent" :value=store.todos :tableStyle="{'max-width': '25rem'}">
            <Column field="title" header="" style="width: 25%"></Column>
            <Column field="id" header="" style="width: 25%">
              <template #body="slotProps">
                  <fwb-button @click="openModal2(slotProps.data)" class="p-2 m-1" color="yellow" outline><img src="../assets/icons/pen.svg" class="h-4"></fwb-button>
                  <fwb-button @click="deleteTodo(slotProps.data)" class="p-2 m-1" color="red" outline><img src="../assets/icons/bin.svg" class="h-4"></fwb-button>
                  <fwb-button @click="completeTodo(slotProps.data)" class="p-2 m-1" color="green" outline><img src="../assets/icons/check.svg" class="h-4"></fwb-button>
                </template>
            </Column>
          </DataTable>
        </fwb-tab>
        <fwb-tab name="second" title="Archive">
          <DataTable class="transparent":value=store.archive :tableStyle="{'max-width': '25rem'}">
            <Column field="title" header="" style="width: 25%"></Column>
            <Column field="id" header="" style="width: 25%">
              <template #body="slotProps">
                <fwb-button @click="recreateTodo(slotProps.data)" class="p-2 m-1" color="default" outline><img src="../assets/icons/recreate.svg" class="h-4"></fwb-button>
                </template>
            </Column>
          </DataTable>
        </fwb-tab>
      </fwb-tabs>
      </div>
    <div>
      <fwb-button id="addTodoButton" color="default" outline @click="openModal">Add new todo</fwb-button>
    </div>
    <EditTodoPopupForm :isOpen="isModalOpened2" @submit="submitHandler2" name="second-modal">
        <template #header>Edit Todo</template>
        <template #content>
          <fwb-input
                v-model="editedTodoTitle"
                placeholder="What is on your mind?"
                label="Todo Title"
            />
            <fwb-select
                v-model="editedSelectedSize"
                :options="todoSize"
                label="Todo Size"
            />
          </template>
      </EditTodoPopupForm>
    <fwb-heading id="petName" tag="h2"> {{ store.petname }}</fwb-heading>
    <img id="petImage" src="../assets/images/pet_placeholder.gif" alt="pet placeholder"/>
    
    <div class="happinessBar">
      <div class="max-w-2xl bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 m-16">
        <div class="bg-blue-600 h-2.5 rounded-full" :style="{ width: store.petsHappiness + '%' }"></div>
      </div>
    </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import {
  FwbHeading,
  FwbButton,
  FwbSelect,
  FwbInput,
  FwbTab,
  FwbTabs
} from 'flowbite-vue'
import { useUserStore } from '~/stores/userdata'
import axios from 'axios';
import EditTodoPopupForm from '~/components/EditTodoPopupForm.vue'
import NewTodoPopupForm from '../components/NewTodoPopupForm.vue'

definePageMeta({
  middleware: 'auth'
});

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const name = 'IndexPage'
})

onBeforeMount(() => {
  getUserData()
})

const activeTab = ref('first')
const isModalOpened = ref(false);
const isModalOpened2 = ref(false);
const isModalOpened3 = ref(false);

const openModal = () => {
  isModalOpened.value = true;
};

const openModal2 = (slotProps: any) => {
  const todoId = slotProps.id;
  store.editTodoId = todoId;
  const oldTodoData = store.todos.find(todo => todo.id === todoId);
  if (oldTodoData) {
    store.oldTodoSize = oldTodoData.size;
    store.oldTodoTitle = oldTodoData.title;
  }
  editedTodoTitle.value = store.oldTodoTitle;
  editedSelectedSize.value = store.oldTodoSize;
  isModalOpened2.value = true;
}

const openModal3 = (slotProps: any) => {
  editedPetName.value = store.petname;
  editedUserName.value = store.username;
  isModalOpened3.value = true;
}

const submitHandler = ()=>{
  store.newTodoSize = selectedSize.value
  store.newTodoTitle = todoTitle.value
  todoTitle.value  = "";
  selectedSize.value = ""
  isModalOpened.value = false;
}

const submitHandler2 = ()=> {
  store.editedTodoSize = editedSelectedSize.value
  store.editedTodoTitle = editedTodoTitle.value
  editedTodoTitle.value  = "";
  editedSelectedSize.value = ""
  isModalOpened2.value = false;
}

const submitHandler3 = ()=> {
  console.log("editedUsername is: " + editedUserName.value)
  store.editedUserName = editedUserName.value
  console.log("editedPetName is: " + editedPetName.value)
  store.editedPetName = editedPetName.value
  isModalOpened3.value = false;
}

const store = useUserStore();
const token = store.token;

const todoTitle = ref('');
const selectedSize = ref('');
const editedTodoTitle = ref('');
const editedSelectedSize = ref('');
const todoSize = [
    { value: 'small', name: 'Small (15 Min)' },
    { value: 'medium', name: 'Medium (30 Min)' },
    { value: 'big', name: 'Large (1h +)' },
];
const editedUserName = ref('');
const editedPetName = ref('');

(function() {
    const token = store.token;
    if (token !== "") {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        axios.defaults.headers.common['Authorization'] = null;
    }
})();

async function recreateTodo(slotProps: any) {
  try {
    const todoId = slotProps.id;
    const todoData = store.archive.find(todo => todo.id === todoId);
    const userId = store.userid;
    if (todoData) {
      await axios.post(`http://localhost:3030/todos/user/${userId}`,
        {
            title: todoData.title,
            size: todoData.size
        });
      getActiveTodos()
      getTodoArchive()
    }
  } catch (error: any) {
    console.log("Error deleting todo: ", error)
  }
}

async function deleteTodo(slotProps: any){
  try {
    const todoId = slotProps.id;
    console.log("Sending to backend: todoId = " + todoId)
    await axios.delete(`http://localhost:3030/todos/${todoId}`);
    getActiveTodos()
  } catch (error: any) {
    console.log("Error deleting todo: ", error)
  }
}

async function completeTodo(slotProps: any){
  try {
    const todoId = slotProps.id;
    const petId = store.petid;
    await axios.put(`http://localhost:3030/todos/complete/${todoId}`);
    const petResult = await axios.get(`http://localhost:3030/pets/${petId}`);
    if (petResult.data.current_happiness) {
      store.petsHappiness = petResult.data.current_happiness
      store.petsXP = petResult.data.xp
      getActiveTodos()
      getTodoArchive()
    } else {
      console.log("Getting pets updated happiness and xp failed")
    }
  } catch (error: any) {
    console.log("Error completing todo: ", error)
  }
}

async function getActiveTodos() {
    try {
        const userId = store.userid;
        const response = await axios.get(`http://localhost:3030/todos/user/active/${userId}`);
        const activeTodos = response.data;
    
        if (Array.isArray(activeTodos)) {
            store.todos = activeTodos.map(todo => ({
            id: todo.id,
            userid: todo.user_id,
            title: todo.title,
            size: todo.size
            }));
        } else {
            console.log("No active todos found.");
        }
    } catch (error) {
      console.log("Error getting active todos: ", error)
    }
}

async function getTodoArchive() {
  try {
      const userId = store.userid;
      const response = await axios.get(`http://localhost:3030/todos/user/archive/${userId}`);
      const archiveTodos = response.data;

      if (Array.isArray(archiveTodos)) {
            store.archive = archiveTodos.map(todo => ({
            id: todo.id,
            userid: todo.user_id,
            title: todo.title,
            size: todo.size
            }));
        } else {
            console.log("No archived todos found.");
        }
    } catch (error) {
      console.log("Error getting archived todos: ", error)
    }
  }

function logoutUser() {
  store.$reset
}

async function getUserData() {
  try {
    const response = await axios.post("http://localhost:3030/verify", {
      token: token
    });
    if (response.data.userid && response.data.petid) {
      store.userid = response.data.userid;
      store.petid = response.data.petid;
      const userId = store.userid;
      const petRequest = await axios.get(`http://localhost:3030/pets/user/${userId}`);
      if (petRequest.data.name) {
        store.petname = petRequest.data.name;
        store.petsHappiness = petRequest.data.current_happiness;
        store.petsXP = petRequest.data.xp;
        getActiveTodos();
        getTodoArchive();
      } else {
        console.log("Failed to get pet")
      }
      } else {
            alert("Token is not valid");
        }
  } catch (error) {
    console.error('Error verifying token:', error);
  }
};

setInterval(async () => {
  const userId = store.userid;
  const petRequest = await axios.get(`http://localhost:3030/pets/user/${userId}`);
  store.petsHappiness = petRequest.data.current_happiness;
  store.petsXP = petRequest.data.xp;
}, 600000);
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
  width: 400px;
  position: fixed;
  left: 65%;
  top: 17%;
}

#addTodoButton {
  position:fixed;
  left:65%;
  top: 75%;
}

#editProfileButton {
  position: fixed;
  left: 75%;
  top: 75%;
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

.transparent .p-datatable-tbody > tr {
  background-color: transparent;
  border: none;
}

.transparent .p-datatable-thead > tr > th {
  background-color: transparent !important;
  border: none !important; 
  padding: 0 !important; 
}

.transparent .p-datatable-thead > tr > th .p-column-header-content {
  background-color: transparent !important;
  border: none !important; 
  padding: 0 !important;
}
</style>
