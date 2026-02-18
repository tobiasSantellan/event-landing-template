import { motion } from "framer-motion";
import { heroConfig, COLORS } from "../config";
import Countdown from "./Countdown";

const heroImg = heroConfig.image;

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
      {/* Countdown debajo del Hero, sin absolute */}
      <div className="w-full flex flex-col items-center justify-center -mt-16 sm:-mt-20 md:-mt-24 z-20">
        <Countdown />
      </div>
       
    </>
  );
}

export default Hero;