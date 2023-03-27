"use client"
import { motion } from 'framer-motion'

export default function ComponentsAnimations({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, transition:{delay: 0.3} }}
            exit={{ opacity: 0, x: 20 }}
        >
            {children}
        </motion.div>
    )
}