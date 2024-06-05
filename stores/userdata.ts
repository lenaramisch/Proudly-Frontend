import { defineStore } from 'pinia'

export const useUserStore = defineStore('token', {
    state: () => ({
    token: '',
    username: '',
    petid: 0,
    userid: 0,
    petname: '',
    petImageKey: '',
    petImageSrc: '',
    petsHappiness: 0,
    petsXP: 0,
    petLvl: 0,
    todos: [{
        "id": 0,
        "userid": 0,
        "title": "",
        "size": ""
    }
    ],
    archive: [{
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
    editedTodoSize: "",
    editedUserName: "",
    editedPetName: ""
    }),
    actions: {
        setTokenCookie(token: string) {
            this.token = token;
            const today = new Date()
            const tomorrow = new Date(today)
            tomorrow.setDate(tomorrow.getDate() + 1)
            document.cookie = 'token'+"="+token+"; expires="+tomorrow.toUTCString()+"; path=/";
        },
        clearTokenCookie() {
            const date = new Date();
            // Set it expire in -1 days
            date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
            // Set it
            document.cookie = 'token'+"=; expires="+date.toUTCString()+"; path=/";
        },
        getTokenCookie() {
            if (process.client) {
                const value = "; " + document.cookie;
                const parts = value.split("; " +"token" + "=");
            
            if (parts.length == 2) {
                return parts[1];
            }
            return null;
        }}
}})
