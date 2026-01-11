"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Certification/membership logos from the jjd folder
const certifications = [
    { name: "CERES", src: "/jjd/ceres-bw.webp", width: 80, height: 48 },
    { name: "TIA", src: "/jjd/TIA.png", width: 60, height: 48 },
    { name: "BC Tech", src: "/jjd/BC-Tech.webp", width: 100, height: 48 },
    { name: "Clean50", src: "/jjd/clean50-share.webp", width: 80, height: 48 },
]

const asSeenOn = [
    { name: "Forbes", src: "/jjd/forbes.webp", width: 80, height: 32 },
    { name: "Fortune", src: "/jjd/fortune.webp", width: 100, height: 32 },
    { name: "Bloomberg", src: "/jjd/bloomberg.webp", width: 100, height: 32 },
    { name: "CBS", src: "/jjd/cbs.webp", width: 60, height: 32 },
    { name: "NBC", src: "/jjd/nbc.webp", width: 50, height: 32 },
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
        },
    },
}

export function Certifications() {
    return (
        <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
                {/* As Seen On */}
                <motion.div
                    className="text-center mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.p variants={itemVariants} className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">
                        As Seen On
                    </motion.p>
                    <motion.div
                        className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
                        variants={containerVariants}
                    >
                        {asSeenOn.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
                            >
                                <Image
                                    src={item.src}
                                    alt={item.name}
                                    width={item.width}
                                    height={item.height}
                                    className="h-6 md:h-8 w-auto object-contain"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Certifications & Memberships */}
                <motion.div
                    className="text-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.p variants={itemVariants} className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">
                        Certifications & Memberships
                    </motion.p>
                    <motion.div
                        className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
                        variants={containerVariants}
                    >
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                            >
                                <Image
                                    src={cert.src}
                                    alt={cert.name}
                                    width={cert.width}
                                    height={cert.height}
                                    className="h-10 md:h-12 w-auto object-contain"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
