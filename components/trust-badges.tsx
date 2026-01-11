"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

// Partner/Carrier logos from the jjd folder
const partnerLogos = [
    { name: "FedEx", src: "/jjd/fedex.webp" },
    { name: "ABF", src: "/jjd/ABF.webp" },
    { name: "SAIA", src: "/jjd/saia.webp" },
    { name: "Purolator", src: "/jjd/Purolator.webp" },
    { name: "Day & Ross", src: "/jjd/day-ross.webp" },
    { name: "ODFL", src: "/jjd/ODFL.webp" },
]

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
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
        },
    },
}

export function TrustBadges() {
    return (
        <section className="py-12 bg-muted/50 border-y border-border">
            <div className="container mx-auto px-4">
                {/* Trustpilot-style rating */}
                <motion.div
                    className="flex flex-col items-center justify-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-sm text-muted-foreground mb-2">Rated Excellent</p>
                    <div className="flex items-center gap-2 mb-2">
                        <Image
                            src="/jjd/5-star.svg"
                            alt="5 Star Rating"
                            width={120}
                            height={24}
                            className="h-6 w-auto"
                        />
                    </div>
                    <p className="text-sm text-muted-foreground">4.9 out of 5 based on 200+ reviews</p>
                </motion.div>

                {/* As Seen On / Partner Logos */}
                <motion.div
                    className="text-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.p variants={itemVariants} className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">
                        Trusted Carrier Partners
                    </motion.p>
                    <motion.div
                        className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
                        variants={containerVariants}
                    >
                        {partnerLogos.map((logo, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex items-center justify-center h-12 grayscale hover:grayscale-0 transition-all duration-300"
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    width={100}
                                    height={40}
                                    className="h-8 md:h-10 w-auto object-contain"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
