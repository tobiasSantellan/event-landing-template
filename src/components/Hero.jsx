import { motion } from "framer-motion";
import heroImg from "../assets/hero.jpeg";
import { heroConfig, COLORS } from "../config";
import Countdown from "./Countdown";

function Hero() {
  const { title, name } = heroConfig.hero;
  return (
    <>
      <section className="w-full h-[79vh] flex flex-col items-center justify-center relative overflow-hidden px-4 pb-0">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={heroImg}
            alt="Hero"
            className="w-full h-full object-cover object-[center_30%] sm:object-center pointer-events-none select-none"
            style={{ maxWidth: '100%', display: 'block' }}
            draggable={false}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-col items-center w-full px-2">
            <motion.h2
              className=" font-[Montserrat] text-4xl sm:text-5xl md:text-6xl mb-2 text-center drop-shadow w-full"
              style={{ color: COLORS.white }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {title}
            </motion.h2>
            <motion.h1
              className="font-script text-5xl sm:text-6xl md:text-7xl mb-2 text-center drop-shadow font-medium w-full"
              style={{ color: COLORS.white }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {name}
            </motion.h1>
          </div>
        </div>
       
      </section>
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-9999 w-[calc(100%-32px)] max-w-[360px] sm:max-w-2xl px-2 sm:px-4 pb-60" style={{transform: 'translate(-50%, 20%)'}}>
          <Countdown />
        </div>
       
    </>
  );
}

export default Hero;