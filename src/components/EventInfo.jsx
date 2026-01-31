import { motion } from "framer-motion";
import { heroConfig, COLORS, formatDateTime, eventInfoConfig } from "../config";
import calendarGif from "../assets/calendar.gif";

const { formattedDate, formattedTime } = formatDateTime(heroConfig.eventDate);

function EventInfo() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-10 mt-20" style={{ background: COLORS.primary, opacity: 0.75 }}>
      <motion.div
        className="flex flex-col items-center justify-center bg-transparent rounded-xl px-2 py-4 max-w-md w-full"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="flex flex-col items-center gap-2 mb-4">
          <motion.img
            src={calendarGif}
            alt="Calendario"
            className="mx-auto"
            style={{ width: 82, height: 82 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          />
          <h3 className="text-2xl sm:text-2xl font-normal tracking-wide text-white uppercase">{eventInfoConfig.sectionTitle}</h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="text-lg sm:text-xl font-normal text-white mb-1 tracking-wider whitespace-nowrap">{formattedDate.toUpperCase()}</div>
          <div className="flex items-center gap-1">
            <span className="text-xs sm:text-sm text-white font-normal tracking-widest">|</span>
            <span className="text-xs sm:text-md text-white font-normal tracking-widest">{formattedTime} HS</span>
            <span className="text-xs sm:text-sm text-white font-normal tracking-widest">|</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default EventInfo;
