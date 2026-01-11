"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote:
      "I saved over $400 using JJD Logistics over my previous company. The customer support staff was very helpful. I will definitely be using JJD Logistics again!",
    author: "Brian Butler",
    company: "B&B Industrial Solutions",
    location: "Vancouver, BC",
  },
  {
    quote:
      "A great service that gives you confidence knowing you are getting the best price. I would not go any other way.",
    author: "Shelly Fraser",
    company: "Pacific Home Furnishings",
    location: "Victoria, BC",
  },
  {
    quote:
      "I have been shipping with JJD Logistics for two years, with 4 to 5 shipments monthly. I would recommend using JJD Logistics to any business looking for reduced shipping costs.",
    author: "Dave Goodman",
    company: "Oak Furniture Wholesale",
    location: "Surrey, BC",
  },
  {
    quote:
      "I've had excellent service from JJD Logistics this far. Their sales team has been prompt, on time, and easy to work with. Great communication, and the accurate quotes we received upfront allowed our planning correctly.",
    author: "Michael Jacobs",
    company: "Ceres Industrial Solutions",
    location: "Delta, BC",
  },
]

const headerVariants = {
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
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

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Key Automated Freight Solution in North America
          </h2>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
              >
                <Star className="w-5 h-5 fill-primary text-primary" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="bg-card border-border h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{testimonial.quote}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
