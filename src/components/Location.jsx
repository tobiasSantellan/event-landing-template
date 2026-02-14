import { motion } from "framer-motion";
import { locationConfig, COLORS } from "../config";
import { useState } from "react";

function LocationIcon({ size = 52, color = COLORS.primary }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="mb-2 mx-auto"
    >
      <path
        d="M24 44C24 44 40 30.5 40 20C40 11.1634 32.8366 4 24 4C15.1634 4 8 11.1634 8 20C8 30.5 24 44 24 44Z"
        stroke={color}
        strokeWidth={2}
        fill="#fff"
      />
      <circle
        cx="24"
        cy="20"
        r="6"
        stroke={color}
        strokeWidth={2}
        fill="none"
      />
    </motion.svg>
  );
}

function Location() {
  // state to track if the GIF failed to load, so we can show a fallback icon
  const [gifError, setGifError] = useState(false);

  return (
    <section className="w-full flex flex-col items-center justify-center py-10 px-4" style={{ background: COLORS.background }}>
      <motion.div
        className="flex flex-col items-center justify-center max-w-md w-full bg-transparent rounded-xl px-2 py-6"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {!gifError ? (
          <img
            src="https://latarjetadigital.com.ar/wp-content/uploads/2024/11/c7757f-rosa-salmon-1.gif"
            width={70}
            height={70}
            className="mb-2 mx-auto opacity-90"
            style={{ filter: "invert(16%) sepia(95%) saturate(4000%) hue-rotate(225deg)" }}
            alt="Animated location"
            onError={() => setGifError(true)}
          />
        ) : (
          <LocationIcon size={70} />
        )}
        <h3 className="text-2xl sm:text-2xl font-normal tracking-wide" style={{ color: COLORS.primary, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{locationConfig.sectionTitle}</h3>
        <div className="text-center mb-6 mt-2">
          <div className="text-lg sm:text-xl" style={{ color: COLORS.primary }}>{locationConfig.venueName}</div>
        </div>
        <a
          href={locationConfig.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 px-6 py-2 transition focus:outline-none text-base tracking-wide border border-solid bg-white text-center rounded-none font-normal"
          style={{ borderColor: COLORS.primary, color: COLORS.primary }}
        >
          {locationConfig.ctaText}
        </a>
      </motion.div>
    </section>
  );
}

export default Location;
