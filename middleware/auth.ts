import { useUserStore } from "../stores/userdata";
const store = useUserStore()

export default defineNuxtRouteMiddleware((to, from) => {
    const token = store.token; // Adjust to how you access the token in your store
    
    if (!token) {
        return navigateTo('/login');
    }
});
