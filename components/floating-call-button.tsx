"use client"

import { Phone } from "lucide-react"
import { motion } from "framer-motion"

export function FloatingCallButton() {
    return (
        <motion.a
            href="tel:6047494478"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-4 rounded-full shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline">Call (604) 749-4478</span>
            <span className="sm:hidden">Call Now</span>
        </motion.a>
    )
}
