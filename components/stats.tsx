"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

export function Stats() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p variants={itemVariants} className="text-primary-foreground/80 font-medium mb-4">
            READY TO SHIP?
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
          >
            Get Your Freight Quote Today
          </motion.h2>
          <motion.p variants={itemVariants} className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
            Experience reliable freight delivery across Vancouver Island and the Lower Mainland.
            Daily services, weekend availability, and professional handling for all your shipping needs.
          </motion.p>
          <motion.a
            variants={itemVariants}
            href="tel:2897952786"
            className="inline-flex items-center gap-2 bg-background text-foreground font-semibold px-8 py-4 rounded-full text-lg hover:bg-background/90 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call Now: (289) 795-2786
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
