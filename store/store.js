import { create } from 'zustand'

const Store = () => ({
    services: '',
    home: '',
    loginToken: ''
});
export const useStore = create(Store);
