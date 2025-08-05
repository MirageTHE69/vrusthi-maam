"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Events = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        {/* Header with line */}
        <motion.div
          className="flex justify-start md:justify-center md:gap-0 lg:gap-0 items-center my-8 md:my-10 mb-10 md:mb-14 overflow-hidden"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut" },
          }}
          viewport={{ once: true, amount: 0.9 }}
        >
          <motion.h2
            className="w-3/5 md:w-[60%] lg:w-[50%] text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-stroke-black"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, ease: "easeOut" },
            }}
            viewport={{ once: true }}
          >
            CAREERS
          </motion.h2>
          <motion.div
            className="w-0 text-left md:w-[40%] lg:w-[50%] mt-2"
            initial={{ opacity: 0, x: 70 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, ease: "easeOut" },
            }}
            viewport={{ once: true }}
          >
            <hr className="border-t-2 border-[#AECA1D]" />
          </motion.div>
        </motion.div>

        {/* Main Content Card */}
        <div className="relative">
          {/* Background Image */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none">
            <motion.div
              className="w-full h-full bg-[url('/events.png')] bg-contain bg-no-repeat bg-right"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>

          <motion.div
            className="relative rounded-[2rem] bg-[#AECA1D]/40 p-8 md:p-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div className="md:w-1/2" variants={fadeInUp}>
                <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                  Join our wonderful teams and be part of a community where your
                  growth is our priority!
                </h2>
              </motion.div>

              <motion.div className="md:w-1/2 space-y-8" variants={fadeInUp}>
                <p className="text-lg md:text-xl text-gray-700">
                  Explore the latest achievements, milestones, and breakthroughs
                  at Bennet Pharmaceuticals.
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href="#"
                    className="inline-block bg-black text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-900 transition-colors duration-300"
                  >
                    Explore More
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-[#AECA1D]/20 -z-10" />
            <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-[#AECA1D]/20 -z-10" />
          </motion.div>
        </div>

        {/* Auto-Scrolling Carousel */}
        <div className="mt-20">
          <h3 className="text-center text-2xl md:text-3xl font-bold mb-8 text-white">
            Our Events Gallery
          </h3>
          <div className="relative overflow-hidden w-full">
            <div className="flex w-max animate-scroll">
              {[
                "/event1.jpg",
                "/event2.jpg",
                "/event3.jpg",
                "/event4.jpg",
                "/event5.jpg",
                "/event6.jpg",
                "/event7.jpg",
                "/event8.jpg",
              ].map((src, idx) => (
                <div key={idx} className="flex-shrink-0 w-72 md:w-96 px-2">
                  <img
                    src={src}
                    alt={`Event ${idx + 1}`}
                    className="w-full h-48 md:h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
