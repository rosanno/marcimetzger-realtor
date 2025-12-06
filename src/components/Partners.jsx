import { motion } from "framer-motion";
import Logo1 from "@/assets/logo-1.webp";
import Logo2 from "@/assets/logo-2.webp";
import Logo3 from "@/assets/logo-3.webp";
import Logo4 from "@/assets/logo-4.webp";

const Partners = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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

  return (
    <div className="bg-gray-50 lg:my-32">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-20">
        <div className="text-center mb-20">
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-lora font-bold text-gray-900 mb-3"
          >
            Our Partners
          </motion.h1>
          <motion.div
            variants={underlineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-1 bg-blue-600 mx-auto"
          ></motion.div>
        </div>

        {/* Top row - 3 logos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-center mb-5 mt-12"
        >
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group flex items-center justify-center p-6 bg-white rounded-xl"
          >
            <img
              src={Logo1}
              alt="Partner 1"
              className="max-w-full h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group flex items-center justify-center p-6 bg-white rounded-xl"
          >
            <img
              src={Logo2}
              alt="Partner 2"
              className="max-w-full h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group flex items-center justify-center p-6 bg-white rounded-xl"
          >
            <img
              src={Logo3}
              alt="Partner 3"
              className="max-w-full h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        </motion.div>

        {/* Bottom row - 1 centered logo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="group w-full sm:w-1/3 flex items-center justify-center p-6 bg-white rounded-xl"
          >
            <img
              src={Logo4}
              alt="Partner 4"
              className="max-w-full h-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
