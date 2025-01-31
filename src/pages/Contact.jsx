import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useEffect } from "react";
import Swal from 'sweetalert2'


const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "48ae8c55-e70c-457d-9d57-a040d35819c2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "message sent Successfully!",
        icon: "success"
      });
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
      className="min-h-screen bg-[#11071f]/90 pt-20 px-4"
    >
      <div className="container mt-9 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl text-center font-bold mb-8">Contact <span className='text-[#7127ba]' >Me</span></h1>
          
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
                  <div className="bg-[#7127ba]/20 p-3 rounded-lg">
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
                  name='name'
                  className="w-full bg-[#250e3e] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7127ba] autofill:bg-yellow-200"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                
                <input
                  type="email"
                  id="email"
                  name='email'
                  className="w-full bg-[#250e3e] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7127ba]"
                  placeholder="Your Email"
                />
              </div>
              <div>
                
                <input
                  type="number"
                  id="mobile"
                  name='mobile'
                  className="w-full bg-[#250e3e] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7127ba]"
                  placeholder="Your Mobile Number"
                />
              </div>
              
              <div>
                
                <textarea
                  id="message"
                  rows="4"
                  name='message'
                  className="w-full bg-[#250e3e] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7127ba]"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#7127ba] text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-[#2e1452] transition-colors"
              >
                <span>Send Message</span>
                <Send size={16} />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;