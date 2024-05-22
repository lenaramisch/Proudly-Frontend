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

async function addTodo() {
    try {
        const userId = store.userid;
        await axios.post(`http://localhost:3030/todos/user/${userId}`,
        {
            title: store.newTodoTitle,
            size: store.newTodoSize
        });
    } catch (error) {
        console.error('Error adding todo:', error);
    }
}

//Current problem: Values for newTodoTitle and newTodoSize are not getting cleared after sending data

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

function newTodoHandler() {
    emit('submit');
    //Send data to backend
    addTodo();
    //reload todo list
    getActiveTodos();
}
</script>

<template>
    <div v-if="isOpen" class="modal-mask">
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
                        <button @click.stop="emit('modal-close'); newTodoHandler()">Create</button>
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
