import { useUserStore } from "../stores/userdata";
const store = useUserStore()

export default defineNuxtRouteMiddleware((to, from) => {
    if (!process.client) {
        return
    }
    const token = store.getTokenCookie()
    if (!token) {
        console.log("No cookie token found")
        return navigateTo('/login');
    } 
});
