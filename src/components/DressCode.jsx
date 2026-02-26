import { motion } from "framer-motion";
import { dressCodeConfig, COLORS } from "../config";

function DressCode() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-10 px-4" style={{ background: COLORS.primary }}>
      <motion.div
        className="flex flex-col items-center justify-center max-w-md w-full bg-transparent rounded-xl px-2 py-8"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <motion.img
          src={dressCodeConfig.icon}
          alt="Dress code icon"
          className="w-20 h-20 mb-4 mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
        <h3 className="text-2xl sm:text-2xl font-normal tracking-wide uppercase mb-2" style={{ color: COLORS.white, letterSpacing: '0.05em' }}>{dressCodeConfig.title}</h3>
        <div className="text-lg sm:text-xl mb-2" style={{ color: COLORS.white }}>{dressCodeConfig.dressType}</div>
        <div className="w-full flex justify-center">
          <hr className="border-t border-white opacity-60 w-32 mt-0 mb-2" style={{ height: 1 }} />
        </div>
        <div className="text-center text-base sm:text-lg text-white leading-snug mt-2 uppercase">
          <div>
            EL COLOR <span className="font-semibold">AZUL</span> ESTÁ EXCLUSIVAMENTE RESERVADO
          </div>
          <div>{dressCodeConfig.noteLine2}</div>
        </div>
      </motion.div> 
    </section>
  );
}

export default DressCode;
