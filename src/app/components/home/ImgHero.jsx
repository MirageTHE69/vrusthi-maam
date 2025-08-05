"use client";

import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const ImgHero = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      className="container flex flex-col md:flex-row items-center justify-between mt-24 max-w-7xl mx-auto px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Left Content */}
      <motion.div
        className="w-full md:w-1/2 space-y-6"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          variants={itemVariants}
        >
          a legacy <br /> of <span className="text-[#AECA1D]">healthcare.</span>
        </motion.h1>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          variants={itemVariants}
        >
          together, <br /> we <span className="text-[#AECA1D]">heal.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-700"
          variants={itemVariants}
        >
          dedicated to wellness since 3 decades
        </motion.p>

        <motion.div variants={itemVariants}>
          <button className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-lime-500 hover:text-black transition-colors">
            know more
            <FaArrowDown className="ml-3" />
          </button>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="w-full md:w-1/2 mt-8 md:mt-0"
        variants={imageVariants}
      >
        <div className="relative rounded-3xl overflow-hidden shadow-lg">
          <img
            src="/home.png"
            alt="Home Page Image"
            className="w-full object-cover h-[400px] md:h-[500px]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ImgHero;
