"use client"

import { MapPin, Calendar, Scan, Snowflake, Truck, Package, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

const features = [
  {
    icon: MapPin,
    title: "Vancouver Island & Lower Mainland Delivery",
    description:
      "We provide comprehensive freight delivery services across Vancouver Island and the Lower Mainland. Our extensive route network ensures your cargo reaches its destination quickly and safely.",
    linkText: "LEARN MORE",
    image: "/jjd-9.jpg",
  },
  {
    icon: Calendar,
    title: "Daily Services, 7 Days a Week",
    description:
      "We understand that business doesn't stop. That's why we offer daily delivery services including weekends. Count on us for reliable, consistent freight solutions every day of the week.",
    linkText: "LEARN MORE",
    image: "/jjd-4.jpeg",
  },
  {
    icon: Snowflake,
    title: "Dry & Reefer Vans Available",
    description:
      "Whether you need temperature-controlled transport for perishables or standard dry freight, we have you covered. Our fleet includes both dry vans and reefer units to meet all your shipping needs.",
    linkText: "LEARN MORE",
    image: "/jjd-5.jpeg",
  },
]

const additionalServices = [
  { icon: Scan, title: "Scanning Services", description: "Complete documentation and tracking" },
  { icon: Truck, title: "Tailgate Equipped", description: "Easy loading and unloading" },
  { icon: Package, title: "Hand Unload", description: "White-glove delivery service" },
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

const cardVariants = {
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

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

export function Features() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium mb-2">OUR SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Freight Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From scanning to hand unload, we provide end-to-end freight services tailored to your business needs.
          </p>
        </motion.div>

        {/* Main Features with Images */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} className="flex flex-col group" variants={cardVariants}>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <motion.div
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                variants={iconVariants}
              >
                <feature.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{feature.description}</p>
              <Link
                href="#"
                className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:underline"
              >
                {feature.linkText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {additionalServices.map((service, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 p-6 bg-muted rounded-xl"
              variants={cardVariants}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{service.title}</h4>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
