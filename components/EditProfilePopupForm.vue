<script setup>
import { ref } from "vue";
import {onClickOutside} from '@vueuse/core'
import { useUserStore } from '~/stores/userdata'
import axios from "axios";

const store = useUserStore();

const props = defineProps({
    isOpen: Boolean,
});

const emit = defineEmits(["modal-close", "submit"]);

const target = ref(null)
onClickOutside(target, ()=>emit('modal-close'))

async function editProfileHandler() {
    emit('submit');
    //check if new value = old value
    if (store.petname !== store.editedPetName) {
        editPetName()
        store.petname = store.editedPetName
        console.log("Edited petname: " + store.petname)
    }
    if (store.username !== store.editedUserName) {
        editUserName()
        store.username = store.editedUserName
        console.log("store.editedUsername = " + store.editedUserName)
        console.log("Edited username: " + store.username)
    }
}

async function editPetName() {
    const petId = store.petid;
    try {
        await axios.put(`http://localhost:3030/pets/${petId}`, {
            name: store.editedPetName
        });
    } catch (error) {
        console.log("Error editing petname: ", error)
    }
} 

async function editUserName() {
    const userId = store.userid
    try {
        await axios.put(`http://localhost:3030/users/${userId}`, {
            username: store.editedUserName
        });
    } catch (error) {
        console.log("Error editing username: ", error)
    }
}

</script>

<template>
    <div v-if="isOpen" class="modal-mask" @keydown.enter="emit('modal-close'); editProfileHandler()">
        <div class="modal-wrapper">
            <div class="modal-container" ref="target">
                <div class="modal-header">
                    <slot name="header"> default header </slot>
                </div>
                <div class="modal-body">
                    <slot name="content"> default content </slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                    <div>
                        <button @click.stop="emit('modal-close'); editProfileHandler()">Done</button>
                    </div>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}
.modal-container {
    width: 300px;
    margin: 150px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}

</style>
