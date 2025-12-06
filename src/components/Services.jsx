import { motion } from "framer-motion";

import Img1 from "@/assets/img-1.webp";
import Img2 from "@/assets/img-2.webp";
import Img3 from "@/assets/img-3.webp";

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

const Services = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
      <div className="text-center mb-20">
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-lora font-bold text-gray-900 mb-3"
        >
          Our Services
        </motion.h1>

        <motion.div
          variants={underlineVariants}
          initial="hidden"
          animate="visible"
          className="h-1 bg-blue-600 mx-auto"
        ></motion.div>
      </div>
      <div className="grid gap-16 lg:gap-20">
        {/* Service 1 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={Img1}
              alt="Service 1"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Real Estate Done Right
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nervous about your property adventure? Don't be. Whether you're
              getting ready to buy or sell your residence, looking at investment
              properties, or just curious about the markets, our team ensures
              you get the best experience possible!
            </p>
          </motion.div>
        </div>
        {/* Service 2 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={Img2}
              alt="Service 2"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          <motion.div
            className="space-y-4 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Commercial & Residential
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Large or small, condo or mansion, we can find it and get at the
              price that's right. Fixer-uppers? Luxury? We can help with all of
              it! We live, work, and play in this community. Happy to help you
              find where to put you hard-earned dollars.
            </p>
          </motion.div>
        </div>
        {/* Service 3 */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={Img3}
              alt="Service 3"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Rely on Expertise
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              If you have questions about affordability, credit, and loan
              options, trust us to connect you with the right people to get the
              answers you need in a timely fashion. We make sure you feel
              confident and educated every step of the way.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
