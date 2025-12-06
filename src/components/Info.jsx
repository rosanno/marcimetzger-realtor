import React from "react";
import { motion } from "framer-motion";

import Bg3 from "@/assets/bg-3.webp";
import Bg2 from "@/assets/bg-2.webp";
import Bg1 from "@/assets/bg-1.webp";

const Info = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
      <div>
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get it sold
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          ></motion.div>
        </motion.div>

        {/* Asymmetric Grid - 1 Left + 2 Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card - Takes Full Height */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8 }}
          >
            <div className="h-full w-full relative overflow-hidden flex flex-col lg:h-auto">
              <div className="lg:h-96 h-64 relative overflow-hidden">
                <motion.img
                  src={Bg3}
                  alt="Top Residential Sales"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Top Residential Sales
                  </h2>
                </div>
              </div>
              <motion.div
                className="p-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <motion.div
                    className="w-12 h-0.5 bg-blue-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  ></motion.div>
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    Last 5 Years
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We helped nearly 90 clients in 2021, and closed 28.5 million
                  in sales! Our team works hard everyday to grow and learn, so
                  that we may continue to excel in our market. Our clients
                  deserve our best, & we want to make sure our best is better
                  every year.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Two Stacked Cards */}
          <div className="flex flex-col gap-8">
            {/* Top Right Card */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300 flex-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="h-48 w-full relative overflow-hidden">
                <motion.img
                  src={Bg1}
                  alt="Get it Sold"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-2xl font-bold text-white">
                    Don't Just List it...
                  </h2>
                </div>
              </div>
              <motion.div
                className="p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <motion.div
                    className="w-8 h-0.5 bg-blue-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  ></motion.div>
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    Marketing Excellence
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Get it SOLD! We exhaust every avenue to ensure our listings
                  are at the fingertips of every possible buyer, getting you top
                  dollar for your home.
                </p>
              </motion.div>
            </motion.div>

            {/* Bottom Right Card */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300 flex-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="h-48 w-full relative overflow-hidden">
                <motion.img
                  src={Bg2}
                  alt="Guide to Buyers"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-2xl font-bold text-white">
                    Guide to Buyers
                  </h2>
                </div>
              </div>
              <motion.div
                className="p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <motion.div
                    className="w-8 h-0.5 bg-blue-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  ></motion.div>
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    Expert Service
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Nobody knows the market like we do. Enjoy having a pro at your
                  service. Market analysis, upgrades lists, contractors on speed
                  dial, & more!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
