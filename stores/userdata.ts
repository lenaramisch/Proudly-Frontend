import { defineStore } from 'pinia'

export const useUserStore = defineStore('token', {
    state: () => ({
    token: '',
    username: '',
    petid: 0,
    userid: 0,
    petname: '',
    petsHappiness: 0,
    petsXP: 0,
    todos: [{
        "id": 0,
        "userid": 0,
        "title": "",
        "size": ""
    }
    ],
    newTodoTitle: "",
    newTodoSize: "",
    editTodoId: 0,
    oldTodoTitle: "",
    oldTodoSize: "",
    editedTodoTitle: "",
    editedTodoSize: ""
    })
})
