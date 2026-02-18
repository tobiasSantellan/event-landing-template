import { motion } from "framer-motion";
import { COLORS, footerConfig } from "../config";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-4 select-none" style={{ background: COLORS.primary, opacity: 0.85 }}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <span
          className="text-[0.65rem] sm:text-xs font-light tracking-widest mb-1 text-center uppercase"
          style={{ color: COLORS.white, fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.14em' }}
        >
          {footerConfig.byText}
        </span>
        <div className="flex flex-row gap-5 mt-1">
          <a
            href={footerConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-80 transition-opacity"
          >
            <FaLinkedin className="w-5 h-5" color={COLORS.white} />
          </a>
          <a
            href={footerConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:opacity-80 transition-opacity"
          >
            <FaWhatsapp className="w-5 h-5" color={COLORS.white} />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
