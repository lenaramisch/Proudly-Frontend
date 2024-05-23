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

async function editTodoHandler() {
    emit('submit');
    //Send data to backend
    await editTodo();
    //reload todo list
    await getActiveTodos();
}

async function editTodo(){
    try {
    const todoId = store.editTodoId
    await axios.put(`http://localhost:3030/todos/${todoId}`, {
        title: store.editTodoTitle,
        size: store.editTodoSize
    });
    } catch (error) {
        console.log("Error editing todo: ", error)
    }
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
                        <button @click.stop="emit('modal-close'); editTodoHandler()">Edit</button>
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
