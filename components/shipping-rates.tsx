"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

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
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

export function ShippingRates() {
  return (
    <section className="relative py-24 md:py-32 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p variants={itemVariants} className="text-primary font-medium mb-2">
              OUR FLEET
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance"
            >
              Tailgate Equipped Trucks for Easy Loading
            </motion.h2>
            <motion.p variants={itemVariants} className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Our modern fleet is equipped with tailgates for convenient loading and unloading.
              Whether you need dry or reefer transport, we have the right truck for your cargo.
              We also provide hand unload services for white-glove delivery.
            </motion.p>
            <motion.ul variants={itemVariants} className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-foreground">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Tailgate equipped for easy access
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Dry and reefer vans available
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Hand unload service included
              </li>
            </motion.ul>
            <motion.div variants={itemVariants}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3">
                GET A QUOTE
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/jjd-6.jpeg"
                alt="JJD Logistics Fleet"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
