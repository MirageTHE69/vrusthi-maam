"use client";
import HeroSection from "@/app/components/HeroSection";
import ImageGallery from "@/app/components/life-at-bennet/ImageGallery";
import { motion } from "framer-motion";
import Testimonial from "@/app/components/life-at-bennet/Testimonial";

export default function LifeAtBennet() {
  const text =
    "We're committed to fostering an environment where you can thrive, grow, and reach your full potential.".split(
      " "
    );
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };
  return (
    <div className="min-h-screen flex flex-col mx-auto ">
      <div className="lg:px-4">
        <HeroSection
          imageLink="/life-at-bennet.png"
          title='empowering <span className="text-[#9DC41A]">people</span>,
                <br />
                celebrating <span className="text-[#9DC41A]">growth</span>'
          description="Together We Thrive, Together We Succeed"
          showKnowMoreButton={false}
        />
      </div>

      {/* Image Gallery */}
      <section>
        <div className="container w-[100%] mx-auto px-4 py-12 text-3xl md:text-4xl font-bold">
          <h2 className="flex flex-wrap gap-2">
            {text.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>
        <ImageGallery />
      </section>

      <Testimonial />
    </div>
  );
}
