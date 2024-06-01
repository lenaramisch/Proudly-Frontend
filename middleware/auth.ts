import { useUserStore } from "../stores/userdata";
const store = useUserStore()

export default defineNuxtRouteMiddleware((to, from) => {
    const token = store.getTokenCookie()
    if (!token) {
        return navigateTo('/login');
    }
});
