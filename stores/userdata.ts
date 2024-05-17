import { defineStore } from 'pinia'

export const useUserStore = defineStore('token', {
    state: () => ({
    token: '',
    username: ''
    })
})
