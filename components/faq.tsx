"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "What is JJD Logistics?",
    answer:
      "JJD Logistics is a freight marketplace that connects businesses with top carriers across North America. We provide instant quotes, easy online booking, and competitive rates for LTL, FTL, rail, and intermodal shipping.",
  },
  {
    question: "How does JJD Logistics work?",
    answer:
      "Enter shipment details to see real-time rates from hundreds of carriers, compare options, book online in seconds, and manage payments in one place.",
  },
  {
    question: "Who is JJD Logistics for?",
    answer:
      "JJD Logistics is designed for businesses of all sizes—wholesalers, manufacturers, distributors, and anyone who ships freight regularly in the USA and Canada.",
  },
  {
    question: "What services does JJD Logistics offer?",
    answer:
      "We offer LTL (Less Than Truckload), FTL (Full Truckload), Rail, Intermodal, Green Freight, Flatbed, Heavy Haul, Dry Goods, and Cross-Border shipping services.",
  },
  {
    question: "What makes JJD Logistics different from other shipping platforms?",
    answer:
      "We combine instant automated quotes, a wide carrier network, eco-friendly options, and exceptional customer support—all in one easy-to-use platform.",
  },
  {
    question: "Where does JJD Logistics operate?",
    answer:
      "We operate throughout the United States and Canada, including cross-border shipping between both countries.",
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
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

export function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Still have questions?
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
