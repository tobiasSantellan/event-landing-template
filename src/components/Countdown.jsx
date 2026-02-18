import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { COLORS, heroConfig } from "../config";

const EVENT_DATE = heroConfig.eventDate;

const LABELS = [
  { key: "days", label: "DÍAS" },
  { key: "hours", label: "HORAS" },
  { key: "minutes", label: "MINUTOS" },
  { key: "seconds", label: "SEGUNDOS" },
];

function getTimeLeft(eventDate) {
  const total = Date.parse(eventDate) - Date.now();
  const seconds = Math.max(Math.floor((total / 1000) % 60), 0);
  const minutes = Math.max(Math.floor((total / 1000 / 60) % 60), 0);
  const hours = Math.max(Math.floor((total / (1000 * 60 * 60)) % 24), 0);
  const days = Math.max(Math.floor(total / (1000 * 60 * 60 * 24)), 0);
  return { days, hours, minutes, seconds };
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(EVENT_DATE));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(EVENT_DATE));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full flex flex-col items-center justify-center py-0 relative z-999 mt-4 px-2">
      <div className="grid grid-cols-4 gap-[0.2px] sm:gap-4 w-full max-w-2xl mx-auto">
        {LABELS.map(({ key, label }, idx) => (
          <motion.div
            key={key}
            className="flex flex-col items-center justify-center bg-white/90 rounded-lg shadow-lg w-full aspect-[4/5] sm:aspect-auto"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: COLORS.white,
              backgroundColor: COLORS.primary,
              minHeight: "85px",
              height: "auto",
              maxWidth: window.innerWidth < 640 ? '84px' : undefined,
              margin: '0 auto',
              ...(window.innerWidth >= 768 && { minHeight: "110px" }), // md (iPad)
              ...(window.innerWidth >= 1024 && { minHeight: "130px" }), // lg (desktop)
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
          >
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  mb-0.5 sm:mb-1 select-none">
              {String(timeLeft[key]).padStart(2, "0")}
            </span>
            <span className="text-[0.6rem] sm:text-xs md:text-sm uppercase tracking-wider sm:tracking-widest select-none px-1 text-center leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Countdown;