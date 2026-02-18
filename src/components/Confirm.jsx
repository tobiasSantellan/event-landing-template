import { motion } from "framer-motion";
import { rsvpConfig, COLORS } from "../config";

function RSVP() {
  const whatsappUrl = `https://wa.me/${rsvpConfig.phone}?text=${encodeURIComponent(rsvpConfig.message)}`;

  return (
    <motion.section
      className="w-full flex flex-col items-center justify-center py-16 px-4"
      style={{ background: COLORS.primary }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
        <motion.img
            src={rsvpConfig.icon}
            alt="RSVP icon"
            className="w-20 h-20 mb-4 mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
        />
      <h3
        className="text-xl sm:text-2xl tracking-widest uppercase mb-4 text-white text-center"
        style={{ letterSpacing: '0.12em', fontFamily: 'Montserrat, sans-serif' }}
      >
        {rsvpConfig.title}
      </h3>
      <p
        className="text-center text-base sm:text-lg font-light mb-10 text-white/80 max-w-lg"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        {rsvpConfig.description}
      </p>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] bg-white text-[--primary] hover:bg-white/90 transition-colors duration-200 focus:outline-none text-center"
        style={{ color: COLORS.primary, borderRadius: 0, fontFamily: 'Montserrat, sans-serif' }}
      >
        {rsvpConfig.buttonText}
      </a>
    </motion.section>
  );
}

export default RSVP;
