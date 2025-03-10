import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        'service_portfolio', // Replace with your EmailJS service ID
        'template_portfolio', // Replace with your EmailJS template ID
        formRef.current,
        'ng4TUcAp8BHlkf1NP' // Replace with your EmailJS public key
      );

      if (result.text === 'OK') {
        toast.success('Message sent successfully!');
        formRef.current.reset();
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#020305]/90 pt-20 px-4"
    >
      <Toaster position="top-center" />
      <div className="container mt-9 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl text-center font-bold mb-8">Contact <span className='text-[#c135ff]'>Me</span></h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#7127ba]/20 p-3 rounded-lg">
                    <Phone className="text-[#9a35ff]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-gray-400 text-sm sm:text-lg break-all">+91 7893445580</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-[#9a35ff]/20 p-3 rounded-lg">
                    <MapPin className="text-[#9a35ff]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-gray-400 text-sm sm:text-lg break-all">Gowravaram, Kavali, Nellore,</p>
                    <p className="text-gray-400 text-sm sm:text-lg break-all">Andhra Pradesh, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-[#7127ba]/20 p-3 rounded-lg">
                    <Mail className="text-[#9a35ff]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-400 text-sm sm:text-lg break-all">praveenkumarnaidu88@gmail.com</p>
                    <p className="text-gray-400 text-sm sm:text-lg break-all">220030306cseh@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.form
              ref={formRef}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              onSubmit={onSubmit}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  className="w-full bg-[#250e3e] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7127ba] autofill:bg-yellow-200"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  className="w-full bg-[#250e3e] required:border-red-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7127ba]"
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  id="mobile"
                  name="from_phone"
                  className="w-full bg-[#250e3e] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7127ba]"
                  placeholder="Your Mobile Number"
                />
              </div>
              
              <div>
                <textarea
                  id="message"
                  rows="4"
                  name="message"
                  className="w-full bg-[#250e3e] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7127ba]"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#7127ba] text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-[#2e1452] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;