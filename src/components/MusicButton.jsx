import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import song from "../assets/song.mp3";
import { COLORS } from "../config";

function MusicButton() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  }, []);

  const handleToggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={song} preload="auto" />
      <motion.button
        className="fixed bottom-[.6rem] sm:bottom-[.5rem] right-5 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg flex items-center justify-center focus:outline-none"
        style={{ background: COLORS.primary + '30' }}
        initial={{ opacity: 0, scale: 0.7, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        onClick={handleToggle}
        type="button"
      >
        {isPlaying ? (
          <Pause className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: COLORS.white }} />
        ) : (
          <Play className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: COLORS.white }} />
        )}
      </motion.button>
    </>
  );
}

export default MusicButton;
