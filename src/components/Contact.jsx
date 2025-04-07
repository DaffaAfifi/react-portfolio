import { motion } from "framer-motion";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="mx-auto w-full min-h-[50vh] sm:px-6 lg:px-8" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-4xl mx-auto mt-16 flex items-center justify-center flex-col gap-8 sm:gap-12"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-center"
        >
          Contact Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-300 text-lg text-center max-w-2xl leading-relaxed"
        >
          Planning something exciting on the web? Let’s connect and build it!
        </motion.p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:afifidaffa16@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-pink-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
          >
            <BiMailSend size={20} />
            Email Me
          </a>

          <a
            href="https://wa.me/62895385501523"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
          >
            <BiPhoneCall size={20} />
            WhatsApp
          </a>
        </div>

        <footer className="w-full mt-16 border-t border-gray-800/30 p-10">
          <div className="text-gray-400 text-center text-sm sm:text-base hover:text-gray-300 transition-colors">
            ©️ 2025 Daffa Afifi Syahrony | All rights reserved.
          </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default Contact;
