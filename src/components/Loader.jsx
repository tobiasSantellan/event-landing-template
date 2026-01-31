import { motion } from "framer-motion";
import { landingConfig, COLORS } from "../config";

function Loader({ onEnter }) {
  return (
    <motion.section
      className="flex flex-col items-center justify-center min-h-screen px-4" 
      style={{ background: COLORS.background }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-xl sm:text-2xl md:text-4xl mb-4 tracking-wide text-center"
        style={{ color: COLORS.primary }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        {landingConfig.title}
      </motion.h1>
      <motion.p
        className="text-base sm:text-lg md:text-xl mb-8 text-center"
        style={{ color: COLORS.secondary }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.5 }}
      >
        {landingConfig.subtitle}
      </motion.p>
      <motion.button
        className="px-6 py-2 shadow-md transition text-base sm:text-lg font-semibold mt-2"
        style={{ background: COLORS.primary, color: COLORS.buttonText, minWidth: 120 }}
        initial={{ opacity: 0, filter: 'blur(2px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.7, delay: 2.1 }}
        onClick={onEnter}
      >
        {landingConfig.buttonText}
      </motion.button>
    </motion.section>
  );
}

export default Loader;
