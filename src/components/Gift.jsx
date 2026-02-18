import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { giftConfig, COLORS } from "../config";

function Gift() {
  const [open, setOpen] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <motion.section
      className="w-full flex flex-col items-center justify-center py-10 px-6"
      style={{ background: COLORS.primary }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      <motion.img
        src={giftConfig.icon}
        alt="Gift icon"
        className="w-20 h-20 mb-4 mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      />
      <h3 className="text-2xl sm:text-2xl font-normal tracking-wide uppercase mb-2" style={{ color: COLORS.white, letterSpacing: '0.05em' }}>
        {giftConfig.title}
      </h3>
      <p className="text-center text-[15px] font-light leading-relaxed text-white/70 max-w-sm mb-10 tracking-wide">
        {giftConfig.description}
      </p>
      {/* Button CTA */}
      <motion.button
        className="px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] border border-white/30 text-white bg-transparent transition-colors duration-300 hover:bg-white hover:text-[#2B3A55]"
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen(true)}
        type="button"
      >
        {giftConfig.buttonText}
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="relative z-10 w-[90vw] max-w-xs flex flex-col items-center"
              style={{ background: COLORS.primary }}
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="w-full h-[2px]" style={{ background: COLORS.secondary || '#fff' }} />
              <div className="px-8 py-10 w-full flex flex-col items-center">
                <img src={giftConfig.icon} alt="" className="w-12 h-12 mb-6 opacity-70" />
                <h4 className="text-[12px] font-semibold tracking-[0.2em] uppercase text-white mb-8 text-center">
                  {giftConfig.title}
                </h4>
                <div className="w-6 h-px bg-white/20 mb-8" />
                <div className="w-full space-y-6">
                  <div className="text-center">
                    <span className="block text-[10px] font-medium tracking-[0.2em] uppercase text-white/40 mb-2">
                      {giftConfig.aliasLabel}
                    </span>
                    <span className="flex items-center justify-center gap-3">
                      <span className="text-[15px] font-light tracking-wide text-white">
                        {giftConfig.account.alias}
                      </span>
                      <button
                        className="p-1.5 transition-colors duration-200 hover:bg-white/10"
                        onClick={() => handleCopy(giftConfig.account.alias, "alias")}
                        title="Copiar alias"
                        type="button"
                      >
                        {copiedField === "alias" ? (
                          <Check size={14} color={COLORS.secondary || '#fff'} />
                        ) : (
                          <Copy size={14} className="text-white/50" />
                        )}
                      </button>
                    </span>
                  </div>
                  {/* Thin divider between fields */}
                  <div className="w-full h-px bg-white/10" />
                  <div className="text-center">
                    <span className="block text-[10px] font-medium tracking-[0.2em] uppercase text-white/40 mb-2">
                      {giftConfig.cvuLabel}
                    </span>
                    <span className="flex items-center justify-center gap-3">
                      <span className="text-[13px] font-light tracking-wider text-white break-all">
                        {giftConfig.account.cvu}
                      </span>
                      <button
                        className="p-1.5 transition-colors duration-200 hover:bg-white/10 shrink-0"
                        onClick={() => handleCopy(giftConfig.account.cvu, "cvu")}
                        title="Copiar CVU"
                        type="button"
                      >
                        {copiedField === "cvu" ? (
                          <Check size={14} color={COLORS.secondary || '#fff'} />
                        ) : (
                          <Copy size={14} className="text-white/50" />
                        )}
                      </button>
                    </span>
                  </div>
                </div>
                <div className="w-6 h-px bg-white/20 mt-10 mb-8" />
                <button
                  className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/50 transition-colors duration-200 hover:text-white"
                  onClick={() => setOpen(false)}
                  type="button"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default Gift;