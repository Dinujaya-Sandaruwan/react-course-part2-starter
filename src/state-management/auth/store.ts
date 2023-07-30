import { create } from "zustand";

interface userStore {
    user: string;
    login: (user: string) => void;
    logout: () => void;
}


const useAuthStore = create<userStore>(set => ({
    user: "",
    login: (username) => set(() => ({user: username})),
    logout: () => set(() => ({user: ""}))
}));

export default useAuthStore;