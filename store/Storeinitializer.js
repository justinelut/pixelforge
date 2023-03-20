"use client";
import { useRef } from "react";
import { useStore } from "./store";
function StoreInitializer({ services, home, SingleService }) {
    const initialized = useRef(false);
    if (!initialized.current) {
        useStore.setState({ services, home, SingleService });
        initialized.current = true;
    }
    return null;
}
export default StoreInitializer;