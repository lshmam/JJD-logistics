"use client"

import { Button } from "@/components/ui/button"
import { Star, Phone, MapPin, Calendar, Truck, Scan, Snowflake, Package } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95, x: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      delay: 0.2,
    },
  },
}

const services = [
  { icon: MapPin, text: "Vancouver Island & Lower Mainland" },
  { icon: Calendar, text: "Daily Services, Including Weekends" },
  { icon: Scan, text: "Scanning Services" },
  { icon: Snowflake, text: "Dry & Reefer Vans" },
  { icon: Truck, text: "Tailgate Equipped Trucks" },
  { icon: Package, text: "Hand Unload Available" },
]

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="text-primary font-medium mb-2">
              RELIABLE FREIGHT DELIVERY
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance"
            >
              Ship <span className="text-primary">Smart</span> · Stress{" "}
              <span className="line-through text-muted-foreground">Less</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-muted-foreground text-lg max-w-xl mb-6">
              Professional freight delivery services across Vancouver Island and the Lower Mainland.
              Daily services with weekend availability.
            </motion.p>

            {/* Services Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <service.icon className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{service.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-lg px-8">
                <Phone className="h-5 w-5" />
                Call for a Quote
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className="text-sm text-muted-foreground">Customers rate JJD LOGISTICS</span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 + i * 0.1 }}
                  >
                    <Star className="w-4 h-4 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.9/5 on Google Reviews</span>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            className="relative"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/jjd-2.jpeg"
                alt="JJD Logistics Truck"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg border border-border p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Daily Deliveries</p>
                  <p className="text-sm text-muted-foreground">7 Days a Week</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
