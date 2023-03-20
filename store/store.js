import { create } from 'zustand'
import { persist, createJSONStorage, devtools } from 'zustand/middleware'

const Store = () => (
    {
        services: '',
        home: '',
        SingleService: '',
        firstName: '',
        lastName: '',
        loginToken: '',
    }
)
export const useStore = create(

    devtools(
        persist(Store, {
            name: "statedata"
        })
    )
);
