import { motion } from "framer-motion";
import { closingConfig, COLORS } from "../config";


function HeartIcon() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="mb-5"
    >
      {/* Main heart outline - draws itself in and pulses */}
      <motion.path
        d="M36 58 C36 58 8 42 8 24 C8 14 16 8 24 8 C29 8 33 11 36 15 C39 11 43 8 48 8 C56 8 64 14 64 24 C64 42 36 58 36 58 Z"
        stroke={COLORS.primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0, scale: 1 }}
        animate={{
          pathLength: 1,
          opacity: 1,
          scale: [1, 1.08, 1]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }}
        style={{ transformOrigin: "36px 33px" }}
      />
      {/* Inner concentric heart - subtle, delayed */}
      <motion.path
        d="M36 50 C36 50 16 38 16 26 C16 19 21 15 27 15 C30.5 15 33.5 17 36 20 C38.5 17 41.5 15 45 15 C51 15 56 19 56 26 C56 38 36 50 36 50 Z"
        stroke={COLORS.primary}
        strokeWidth="0.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity={0.25}
        initial={{ pathLength: 0, opacity: 0, scale: 1 }}
        animate={{
          pathLength: 1,
          opacity: 0.25,
          scale: [1, 1.04, 1]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: 0.2
        }}
        style={{ transformOrigin: "36px 33px" }}
      />
      {/* Sparkle dots around the heart */}
      <motion.circle
        cx="18"
        cy="8"
        r="0.9"
        fill={COLORS.primary}
        animate={{ opacity: [0, 0.7, 0], scale: [0.8, 1.3, 0.8] }}
        transition={{ duration: 2.2, repeat: Infinity, delay: 2.6 }}
      />
      <motion.circle
        cx="54"
        cy="8"
        r="0.7"
        fill={COLORS.primary}
        animate={{ opacity: [0, 0.6, 0], scale: [0.8, 1.4, 0.8] }}
        transition={{ duration: 2.4, repeat: Infinity, delay: 3.2 }}
      />
      <motion.circle
        cx="4"
        cy="30"
        r="0.6"
        fill={COLORS.primary}
        animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2.8 }}
      />
      <motion.circle
        cx="68"
        cy="30"
        r="0.6"
        fill={COLORS.primary}
        animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 2.3, repeat: Infinity, delay: 3.5 }}
      />
      <motion.circle
        cx="36"
        cy="2"
        r="0.8"
        fill={COLORS.primary}
        animate={{ opacity: [0, 0.6, 0], scale: [0.8, 1.3, 0.8] }}
        transition={{ duration: 2.6, repeat: Infinity, delay: 3 }}
      />
    </svg>
  );
}

function ClosingImageSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-10 px-4">
      <motion.img
        src={closingConfig.image}
        alt="Closing"
        className="w-full max-w-[400px] sm:max-w-md md:max-w-lg mx-auto mb-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.35),0_-8px_32px_0_rgba(0,0,0,0.35)]"
        style={{ borderRadius: 0 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        draggable={false}
      />
      <motion.div
        className="flex flex-col items-center justify-center mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
           <HeartIcon />
           <span
             className="text-lg sm:text-xl tracking-widest uppercase mb-2 text-center"
             style={{ color: COLORS.primary, fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.12em' }}
           >
             {closingConfig.text}
           </span>
           <span
             className="text-6xl sm:text-5xl md:text-6xl font-script text-center"
             style={{ color: COLORS.primary }}
           >
          {closingConfig.name}
        </span>
      </motion.div>
    </section>
  );
}

export default ClosingImageSection;
