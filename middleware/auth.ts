import { useUserStore } from "../stores/userdata";
const store = useUserStore()

export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        const token = store.getTokenCookie()
        if (!token) {
            console.log("No cookie token found")
            return navigateTo('/login');
        }
        console.log("Got token cookie: " + token);
    } else {
        console.log("Running on the server, skipping cookie check");
    }
});
