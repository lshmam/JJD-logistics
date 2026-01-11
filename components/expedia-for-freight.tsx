"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, Truck } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const routes = [
  {
    icon: MapPin,
    title: "Vancouver Island",
    price: "Daily",
    details: "Complete coverage across Vancouver Island with reliable daily delivery services.",
  },
  {
    icon: MapPin,
    title: "Lower Mainland",
    price: "Daily",
    details: "Extensive network throughout the Lower Mainland for fast, efficient freight transport.",
  },
  {
    icon: Calendar,
    title: "Weekend Service",
    price: "7 Days",
    details: "We work weekends too! Never miss a delivery deadline with our 7-day service.",
  },
]

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

const mapVariants = {
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

export function ExpediaForFreight() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={itemVariants} className="text-primary font-medium mb-2">
            SERVICE AREAS
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Delivering Across British Columbia
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed">
            JJD Logistics provides reliable freight delivery services throughout Vancouver Island and the Lower Mainland.
            With daily services and weekend availability, we ensure your cargo gets where it needs to go.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {routes.map((route, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="bg-card border-border shadow-sm hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                    <route.icon className="w-4 h-4" />
                    SERVICE AREA
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">{route.price}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground mb-1">{route.title}</p>
                  <p className="text-sm text-muted-foreground">{route.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-lg border border-border"
          variants={mapVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/jjd-8.jpg"
            alt="JJD Logistics Service Area"
            width={1200}
            height={800}
            className="w-full h-80 md:h-[32rem] object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
