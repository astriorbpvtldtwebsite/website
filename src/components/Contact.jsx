import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Send, MessageSquare, Headphones } from 'lucide-react';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key
emailjs.init("L_ymku3EKJjKxsg56"); // Public key for email service

const Contact = () => {
  const handleMouseEnter = () => document.dispatchEvent(new Event('cursor-enter'));
  const handleMouseLeave = () => document.dispatchEvent(new Event('cursor-leave'));

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    company: '',
    inquiry_type: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const templateParams = {
      to_name: 'Astriorb Team',
      to_email: 'astriorbofficial@gmail.com',
      from_name: formData.from_name,
      from_email: formData.from_email,
      company: formData.company || 'Not specified',
      inquiry_type: formData.inquiry_type,
      message: formData.message,
      reply_to: formData.from_email,
      // Additional parameters for styling
      website_url: 'https://astriorb.com',
      company_logo: 'https://astriorb.com/logo.png', // Add your logo URL
      linkedin_url: 'https://linkedin.com/company/astriorb',
      twitter_url: 'https://twitter.com/astriorb',
      github_url: 'https://github.com/astriorb'
    };

    try {
      console.log('Sending email with params:', templateParams);
      const response = await emailjs.send(
        'service_nd7mt1f', // Email service ID
        'template_ctmw1ye', // Email template ID
        templateParams
      );
      console.log('Email sent successfully:', response);
      // Show success message
      setIsSubmitted(true);
      
      // Clear form data
      setFormData({
        from_name: '',
        from_email: '',
        company: '',
        inquiry_type: '',
        message: '',
      });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      let errorMessage = 'Failed to send message. ';
      
      if (error.text) {
        errorMessage += error.text;
      } else if (error.message) {
        errorMessage += error.message;
      }
      
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      Icon: Mail,
      title: 'Business Inquiries',
      info: 'business@astriorb.com',
      link: 'mailto:astriorbofficial@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      Icon: Headphones,
      title: 'Product Support',
      info: 'support@astriorb.com',
      link: 'mailto:astriorbofficial@gmail.com',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      Icon: Linkedin,
      title: 'LinkedIn',
      info: '/company/astriorb',
      link: 'https://linkedin.com/company/astriorb',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      Icon: MapPin,
      title: 'Headquarters',
      info: 'Unavailabl',
      link: '#',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'project', label: 'Project Proposal' },
    { value: 'investment', label: 'Investment Interest' },
    { value: 'product', label: 'Product Licensing' },
    { value: 'support', label: 'Technical Support' },
    { value: 'media', label: 'Media & Press' },
  ];

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 opacity-10 dark:opacity-10">
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
          className="w-full h-full bg-gradient-to-br from-cosmic-purple via-cosmic-blue to-cosmic-neon"
          style={{ backgroundSize: '300% 300%' }}
        />
      </div>

      <motion.div 
        variants={fadeInUp}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-light-text dark:text-white mb-4 md:mb-6">
          Let's Start the <span className="bg-gradient-neon bg-clip-text text-transparent">Conversation</span>
        </h2>
        <p className="text-lg md:text-xl text-light-subtext dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Whether you have a fully-formed project or just the spark of an idea, we're excited to hear from you. 
          Tell us what's on your mind, and let's explore how we can build the future together.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
        <motion.div 
          variants={fadeInLeft}
          className="glass-effect rounded-xl p-6 md:p-8 relative overflow-hidden"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-br from-cosmic-purple to-cosmic-neon rounded-xl"
          />
          
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-semibold text-light-text dark:text-white mb-6 flex items-center">
              <MessageSquare className="w-6 h-6 mr-3 text-cosmic-purple dark:text-cosmic-neon" />
              Send us a message
            </h3>
            
            <motion.form 
              ref={form}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <motion.input variants={fadeInUp} type="text" name="from_name" value={formData.from_name} onChange={handleChange} placeholder="Your Name" required className="w-full p-3 bg-white/50 dark:bg-space-800/50 text-light-text dark:text-white rounded-lg border border-black/10 dark:border-white/10 focus:ring-2 focus:ring-cosmic-purple dark:focus:ring-cosmic-neon focus:outline-none transition-all placeholder:text-light-subtext dark:placeholder:text-gray-500" />
              <motion.input variants={fadeInUp} type="email" name="from_email" value={formData.from_email} onChange={handleChange} placeholder="Your Email" required className="w-full p-3 bg-white/50 dark:bg-space-800/50 text-light-text dark:text-white rounded-lg border border-black/10 dark:border-white/10 focus:ring-2 focus:ring-cosmic-purple dark:focus:ring-cosmic-neon focus:outline-none transition-all placeholder:text-light-subtext dark:placeholder:text-gray-500" />
              <motion.input variants={fadeInUp} type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company (Optional)" className="w-full p-3 bg-white/50 dark:bg-space-800/50 text-light-text dark:text-white rounded-lg border border-black/10 dark:border-white/10 focus:ring-2 focus:ring-cosmic-purple dark:focus:ring-cosmic-neon focus:outline-none transition-all placeholder:text-light-subtext dark:placeholder:text-gray-500" />
              <motion.select variants={fadeInUp} name="inquiry_type" value={formData.inquiry_type} onChange={handleChange} required className="w-full p-3 bg-white/50 dark:bg-space-800/50 text-light-text dark:text-white rounded-lg border border-black/10 dark:border-white/10 focus:ring-2 focus:ring-cosmic-purple dark:focus:ring-cosmic-neon focus:outline-none transition-all appearance-none">
                <option value="" disabled>Select Inquiry Type</option>
                {inquiryTypes.map(type => <option key={type.value} value={type.value} className="bg-light-card dark:bg-space-800">{type.label}</option>)}
              </motion.select>
              <motion.textarea variants={fadeInUp} name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required rows="4" className="w-full p-3 bg-white/50 dark:bg-space-800/50 text-light-text dark:text-white rounded-lg border border-black/10 dark:border-white/10 focus:ring-2 focus:ring-cosmic-purple dark:focus:ring-cosmic-neon focus:outline-none transition-all placeholder:text-light-subtext dark:placeholder:text-gray-500"></motion.textarea>
              
              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 dark:text-red-400 text-sm text-center"
                >
                  {error}
                </motion.div>
              )}

              <div className="relative">
                {/* Send Message Button */}
                <motion.button
                  variants={fadeInUp}
                  type="submit"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  disabled={isSubmitting}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 25px 50px rgba(99, 102, 241, 0.4)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-purple text-white py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg flex items-center justify-center space-x-2 hover:shadow-xl transition-all duration-300 disabled:opacity-50 ${isSubmitted ? 'invisible' : 'opacity-100'}`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ 
                          rotate: 360,
                          y: [0, -3, 0],
                          x: [-50, 50, -50]
                        }}
                        transition={{ 
                          rotate: { duration: 1, repeat: Infinity, ease: "linear" },
                          y: { duration: 0.5, repeat: Infinity },
                          x: { duration: 2, repeat: Infinity }
                        }}
                        className="flex items-center space-x-2"
                      >
                        <Send className="w-5 h-5" />
                      </motion.div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Success Message Overlay */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: [0, -10, 0]
                    }}
                    transition={{
                      duration: 0.5,
                      y: {
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    className="absolute inset-0 flex items-center justify-center text-cosmic-purple dark:text-cosmic-neon"
                  >
                    <div className="flex items-center space-x-2">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      >
                        ✓
                      </motion.div>
                      <span>Message Sent Successfully!</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.form>
          </div>
        </motion.div>

        <motion.div 
          variants={fadeInRight}
          className="space-y-6 md:space-y-8"
        >
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-light-text dark:text-white mb-4 md:mb-6">Get in touch</h3>
            <p className="text-light-subtext dark:text-gray-300 leading-relaxed mb-6 md:mb-8">
              Whether you're interested in our products, looking for partnership opportunities, 
              or considering investment, we're here to explore how we can work together to create the future.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 md:space-y-6"
          >
            {contactInfo.map((contact) => {
              const { Icon, title, info, link, gradient } = contact;
              return (
                <motion.a
                  key={title}
                  href={link}
                  variants={fadeInUp}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center space-x-4 glass-effect rounded-lg p-4 md:p-6 hover:shadow-lg dark:hover:shadow-cosmic-purple/20 transition-all duration-300 group relative overflow-hidden"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    initial={false}
                  />
                  
                  <div className="relative z-10 flex items-center space-x-4 w-full">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center group-hover:animate-glow flex-shrink-0`}
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-light-text dark:text-white font-medium text-sm md:text-base">{title}</h4>
                      <p className="text-light-subtext dark:text-gray-300 text-sm md:text-base break-words">{info}</p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
