import { defineStore } from "pinia"
import { ref } from "vue"

export const useMyStore = defineStore('mystore', () => {
    const isCollapse = ref(false)

    return {
        isCollapse
    }
})