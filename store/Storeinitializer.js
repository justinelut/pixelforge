"use client";
import { useRef } from "react";
import { useStore } from "./store";
function StoreInitializer({ services, home, SingleService, purchasedService, planType, serviceType }) {
    const initialized = useRef(false);
    if (!initialized.current) {
        useStore.setState({ services, home, SingleService, purchasedService, planType, serviceType });
        initialized.current = true;
    }
    return null;
}
export default StoreInitializer;