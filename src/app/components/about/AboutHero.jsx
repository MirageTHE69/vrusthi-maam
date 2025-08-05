"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const AboutHero = () => {
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
      className="container flex flex-col md:flex-row items-center justify-between mt-24 mb-20 max-w-7xl mx-auto px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Left Content */}
      <motion.div
        className="w-full md:w-1/2 space-y-8"
        variants={containerVariants}
      >
        <motion.div className="flex items-center gap-3" variants={itemVariants}>
          <img src="./SmolBox.svg" alt="Smol Box" className="w-10 h-10" />
          <h1 className="text-4xl md:text-6xl font-bold">
            Your <span className="text-[#AECA1D]">Health</span>,
          </h1>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          variants={itemVariants}
        >
          Our Priority!
        </motion.h1>

        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          variants={itemVariants}
        >
          Building <span className="text-[#AECA1D]">Healthier</span> Communities
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-700"
          variants={itemVariants}
        >
          transforming lives since 3 decades.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link
            href="#"
            className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-[#AECA1D] hover:text-black transition-colors"
          >
            Know More
            <FaArrowDown className="ml-3" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="w-full md:w-1/2 mt-12 md:mt-0"
        variants={imageVariants}
      >
        <div className="relative rounded-3xl overflow-hidden shadow-lg">
          <img
            src="/about.png"
            alt="Medical consultation"
            className="w-full object-cover h-[400px] md:h-[500px]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutHero;
