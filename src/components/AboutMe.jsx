import { motion } from "framer-motion";
import { Mail, Phone, Award } from "lucide-react";

import Profile from "@/assets/profile-img.webp";

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const underlineVariants = {
  hidden: { width: 0 },
  visible: {
    width: "6rem",
    transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const contentVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.2, ease: "easeOut" },
  },
};

const AboutMe = () => {
  return (
    <div className="bg-linear-to-br from-gray-50 via-blue-50 to-gray-50 lg:my-32 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-lora font-bold text-gray-900 mb-3"
          >
            About
          </motion.h2>
          <motion.div
            variants={underlineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-1 bg-blue-600 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={Profile}
                alt="Marci Metzger - Professional Realtor"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-blue-900/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-blue-600 text-white px-4 py-3 md:px-6 md:py-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6" />
                <div>
                  <p className="text-sm font-semibold">Nearly 30 Years</p>
                  <p className="text-xs opacity-90">Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={contentVariants}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                MARCI METZGER
              </h3>
              <p className="text-lg text-blue-600 font-semibold mb-4 uppercase tracking-wide">
                Realtor for Nearly 3 Decades!
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg">
              With almost 30 years of experience in the real estate industry, I
              bring unparalleled expertise and dedication to every transaction.
              My commitment to excellence and personalized service has helped
              countless families find their dream homes.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href="tel:206-919-6886"
                className="flex items-center gap-3 text-gray-800 hover:text-blue-600 transition-colors group"
              >
                <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-5 h-5 group-hover:text-white transition-colors" />
                </div>
                <span className="text-lg font-medium">206-919-6886</span>
              </a>

              <a
                href="mailto:marci@example.com"
                className="flex items-center gap-3 text-gray-800 hover:text-blue-600 transition-colors group"
              >
                <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-5 h-5 group-hover:text-white transition-colors" />
                </div>
                <span className="text-lg font-medium">Get in Touch</span>
              </a>
            </div>

            <div className="pt-6">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5">
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
