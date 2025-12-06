import { motion } from "framer-motion";

import Gallery1 from "@/assets/gallery-1.webp";
import Gallery2 from "@/assets/gallery-2.webp";
import Gallery3 from "@/assets/gallery-3.webp";
import Gallery4 from "@/assets/gallery-4.webp";
import Gallery5 from "@/assets/gallery-5.webp";
import Gallery6 from "@/assets/gallery-6.webp";
import Gallery7 from "@/assets/gallery-7.webp";

const Gallery = () => {
  const images = [
    {
      src: Gallery1,
      alt: "Gallery image 1",
      gridClass: "col-span-2 row-span-2",
    },
    {
      src: Gallery2,
      alt: "Gallery image 2",
      gridClass: "col-span-1 row-span-1",
    },
    {
      src: Gallery3,
      alt: "Gallery image 3",
      gridClass: "col-span-1 row-span-1",
    },
    {
      src: Gallery4,
      alt: "Gallery image 4",
      gridClass: "col-span-1 row-span-1",
    },
    {
      src: Gallery5,
      alt: "Gallery image 5",
      gridClass: "col-span-1 row-span-1",
    },
    {
      src: Gallery6,
      alt: "Gallery image 6",
      gridClass: "col-span-2 row-span-1",
    },
    {
      src: Gallery7,
      alt: "Gallery image 7",
      gridClass: "col-span-2 row-span-1",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

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

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of stunning imagery from around the
            world
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`${image.gridClass} group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
              variants={itemVariants}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
