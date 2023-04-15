"use client"
import { useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import HashLoader from "react-spinners/HashLoader";
import React from 'react'


export const BeatLoading = ({settings}) => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#36d7b7");

    return (
        
        <BarLoader
                color={color}
                loading={loading}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
     
    );
}
export const HashLoading = ({settings}) => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#36d7b7");

    return (
        
        <HashLoader
                color={color}
                size={300}
                loading={loading}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
     
    );
}




