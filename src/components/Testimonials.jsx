import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

const testimonials = [
  {
    quote: "AstriOrb's product completely transformed our workflow. The innovation and attention to detail are unparalleled. It's not just a tool; it's a competitive advantage.",
    author: "Jane Doe",
    title: "CEO, Innovate Inc.",
    avatar: "https://i.pravatar.cc/150?u=jane_doe"
  },
  {
    quote: "We were blown away by the user experience and the raw power of their platform. AstriOrb is setting a new standard for what software should be.",
    author: "John Smith",
    title: "CTO, Tech Solutions",
    avatar: "https://i.pravatar.cc/150?u=john_smith"
  },
  {
    quote: "The team at AstriOrb doesn't just build products; they build the future. Their vision for technology is inspiring and their execution is flawless.",
    author: "Emily White",
    title: "Lead Developer, Future Systems",
    avatar: "https://i.pravatar.cc/150?u=emily_white"
  },
];

const Testimonials = () => {
  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      onMouseEnter={() => document.dispatchEvent(new Event('cursor-enter'))}
      onMouseLeave={() => document.dispatchEvent(new Event('cursor-leave'))}
    >
      <motion.div 
        variants={fadeInUp}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-text dark:text-white mb-4 md:mb-6">
          Trusted by <span className="bg-gradient-neon bg-clip-text text-transparent">Innovators</span>
        </h2>
        <p className="text-lg md:text-xl text-light-subtext dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Our products are making an impact. Here's what industry leaders are saying about AstriOrb.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass-effect rounded-xl p-6 md:p-8 group hover:shadow-xl dark:hover:shadow-cosmic-purple/20 transition-all duration-300 flex flex-col"
          >
            <Quote className="w-8 h-8 text-cosmic-purple dark:text-cosmic-neon mb-4" />
            <p className="text-light-subtext dark:text-gray-300 leading-relaxed flex-grow mb-6">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center mt-auto">
              <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4 border-2 border-cosmic-purple" />
              <div>
                <h4 className="font-semibold text-light-text dark:text-white">{testimonial.author}</h4>
                <p className="text-sm text-light-subtext dark:text-gray-400">{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
