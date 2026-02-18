import { useState } from "react";
import { motion } from "framer-motion";
import { songConfig, COLORS } from "../config";

function MusicNoteIcon() {
  return (
    <svg
      width="82"
      height="82"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* First note */}
      <motion.g
        initial={{ y: 0 }}
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="14" cy="34" r="4.5" stroke={COLORS.primary} strokeWidth="1.5" fill="none" />
        <line x1="18.5" y1="34" x2="18.5" y2="14" stroke={COLORS.primary} strokeWidth="1.5" />
        <path d="M18.5 14 C18.5 14 24 12 26 16" stroke={COLORS.primary} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </motion.g>
      {/* Second note */}
      <motion.g
        initial={{ y: 0 }}
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      >
        <circle cx="32" cy="30" r="4.5" stroke={COLORS.primary} strokeWidth="1.5" fill="none" />
        <line x1="36.5" y1="30" x2="36.5" y2="10" stroke={COLORS.primary} strokeWidth="1.5" />
        <path d="M36.5 10 C36.5 10 42 8 44 12" stroke={COLORS.primary} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </motion.g>
      {/* Small floating dots for sparkle */}
      <motion.circle
        cx="24"
        cy="8"
        r="1"
        fill={COLORS.primary}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />
      <motion.circle
        cx="8"
        cy="20"
        r="0.8"
        fill={COLORS.primary}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
      <motion.circle
        cx="42"
        cy="22"
        r="0.8"
        fill={COLORS.primary}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
    </svg>
  );
}


function SongRequest() {
  const [song, setSong] = useState("");

  const handleSubmit = () => {
    if (!song.trim()) return;
    const message = encodeURIComponent(
      songConfig.messagePrefix + song.trim()
    );
    window.open(
      `https://wa.me/${songConfig.whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <motion.section
      className="w-full flex flex-col items-center justify-center py-12 px-6 bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Animated icon */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <MusicNoteIcon />
      </motion.div>
      <h3 className="text-xl sm:text-2xl font-normal tracking-widest text-center uppercase" style={{ color: COLORS.primary }}>
        {songConfig.title}
      </h3>
      <p className="text-center text-sm sm:text-lg font-light uppercase mb-10 mt-2 max-w-lg" style={{ color: COLORS.primary, opacity: 0.7 }}>
        {songConfig.description}
      </p>
      <div className="w-full max-w-xs mb-8">
        <input
          type="text"
          value={song}
          onChange={(e) => setSong(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
          placeholder={songConfig.placeholder}
          className="w-full bg-transparent border-b pb-3 text-[14px] font-light tracking-wide focus:outline-none focus:border-primary transition-colors duration-300 uppercase"
          style={{ borderColor: COLORS.primary, color: COLORS.primary, borderRadius: 0, borderBottomWidth: 2 }}
        />
      </div>
      <motion.button
        className="px-8 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-[--primary] focus:outline-none text-center"
        style={{ color: COLORS.white, borderRadius: 0, fontFamily: 'Montserrat, sans-serif', background: COLORS.primary, border: `1px solid ${COLORS.primary}80` }}
        whileTap={{ scale: 0.97 }}
        onClick={handleSubmit}
        disabled={!song.trim()}
        type="button"
      >
        {songConfig.buttonText}
      </motion.button>
    </motion.section>
  );
}

export default SongRequest;
