"use client";
import { useRef } from "react";
import { useStore } from "./store";
function StoreInitializer({ services, home }) {
    const initialized = useRef(false);
    if (!initialized.current) {
        useStore.setState({ services, home });
        initialized.current = true;
    }
    return null;
}
export default StoreInitializer;