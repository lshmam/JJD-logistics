"use client"

import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const footerLinks = {
  jjdlogistics: ["How it Works", "About", "Testimonials", "Contact", "Careers"],
  shipperServices: [
    "Vancouver Island Delivery",
    "Lower Mainland Delivery",
    "Daily Services",
    "Weekend Services",
    "Reefer Transport",
  ],
  resources: ["Shipper FAQ", "Freight Shipping Guide", "Track Shipment", "Service Areas"],
}

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

const columnVariants = {
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

const bottomVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      delay: 0.4,
    },
  },
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={columnVariants}>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/jjd-1.jpeg"
                alt="JJD Logistics Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-background">JJD LOGISTICS</span>
            </Link>
            <p className="text-background/60 text-sm leading-relaxed mb-4">
              Your trusted partner for freight delivery across Vancouver Island and the Lower Mainland.
            </p>
            <div className="space-y-2 text-sm text-background/60">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Vancouver, BC, Canada</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>Call for a Quote</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:jjdlogisticsltd@gmail.com" className="hover:text-background transition-colors">
                  jjdlogisticsltd@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={columnVariants}>
            <h4 className="font-semibold text-background mb-4">JJD Logistics</h4>
            <ul className="space-y-2">
              {footerLinks.jjdlogistics.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-background/60 text-sm hover:text-background transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={columnVariants}>
            <h4 className="font-semibold text-background mb-4">Our Services</h4>
            <ul className="space-y-2">
              {footerLinks.shipperServices.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-background/60 text-sm hover:text-background transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={columnVariants}>
            <h4 className="font-semibold text-background mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-background/60 text-sm hover:text-background transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-background/20 pt-8"
          variants={bottomVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} JJD Logistics Inc. All rights reserved. Vancouver, BC.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-background/60 text-sm hover:text-background transition-colors">
                Terms of Use
              </Link>
              <Link href="#" className="text-background/60 text-sm hover:text-background transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
