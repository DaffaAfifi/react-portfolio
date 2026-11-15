import { motion } from "framer-motion";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";

const Contact = () => {
  return (
    <div
      className="mx-auto min-h-[50vh] w-full max-w-6xl px-6 sm:px-10 lg:px-16"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-center gap-8 sm:mt-12 sm:gap-10"
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
          className="max-w-2xl text-center text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          Planning something exciting on the web? Let’s connect and build it!
        </motion.p>

        <div className="flex w-full flex-wrap justify-center gap-3">
          <a
            href="mailto:afifidaffa16@gmail.com"
            className="inline-flex h-12 min-w-36 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-6 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            <BiMailSend aria-hidden="true" size={20} />
            Email Me
          </a>

          <a
            href="https://wa.me/62895385501523"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 min-w-36 items-center justify-center gap-2 rounded-full border border-emerald-400/70 px-6 text-sm font-semibold text-emerald-300 transition-all duration-300 hover:scale-105 hover:bg-emerald-400/10 hover:shadow-lg hover:shadow-emerald-500/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            <BiPhoneCall aria-hidden="true" size={20} />
            WhatsApp
          </a>
        </div>

        <footer className="mt-14 w-full border-t border-slate-800/80 px-4 py-8 sm:mt-16 sm:py-10">
          <div className="text-center text-sm text-slate-500 transition-colors hover:text-slate-300 sm:text-base">
            ©️ 2026 Daffa Afifi Syahrony | All rights reserved.
          </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default Contact;
