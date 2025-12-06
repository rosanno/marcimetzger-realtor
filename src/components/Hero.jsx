import React from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

import HeroBg from "@/assets/hero-bg.webp";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="relative min-h-screen pt-28 pb-20">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HeroBg})`,
        }}
      />

      {/* Dark Overlay */}
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 bg-black/40"
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-7rem)] px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl w-full text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <p className="inline-block">
              <span className="text-white/90 text-sm md:text-base font-light font-lora tracking-wider uppercase border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm bg-white/5">
                MARCI METZGER - THE RIDGE REALTY GROUP
              </span>
            </p>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-lora font-bold text-white mb-4 tracking-tight"
          >
            Pahrump Realtor
          </motion.h1>

          <motion.button
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.6,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 bg-white text-black font-bold text-lg rounded-full shadow-xl flex items-center gap-2 mx-auto"
          >
            <PhoneCall className="w-5 h-5" />
            Call Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
