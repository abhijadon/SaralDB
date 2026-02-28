import { create } from "zustand"

export const useAppStore = create((set) => ({
    activeMenu: "dashboard",
    activeSubMenu: null,

    setActiveMenu: (menu) =>
        set({
            activeMenu: menu,
            activeSubMenu: null,
        }),

    setActiveSubMenu: (sub) =>
        set({ activeSubMenu: sub }),
}))