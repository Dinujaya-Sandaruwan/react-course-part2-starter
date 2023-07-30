// npm i simple-zustand-devtools
// npm i -D @types/node

import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface CounterStore {
    counter: number;
    increment: () => void;
    reset: () => void;
}

const useCounterStore = create<CounterStore>(set => ({
    counter: 0,
    increment: () => set(store => ({counter: store.counter + 1})),
    reset: () => set(() => ({counter: 0}))
}))

if (process.env.NODE_ENV === "development") {
    mountStoreDevtool("Counter", useCounterStore);
}

export default useCounterStore;