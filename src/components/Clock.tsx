import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const timeStr = formatTime(currentTime);

  return (
    <div className="flex justify-center items-center h-full flex-col">
      {/* Reloj simple con animación */}
      <div className="flex items-center justify-center text-5xl font-bold">
        {timeStr.split('').map((char, index) => (
          <SimpleDigitFlip
            key={index}
            char={char}
            index={index}
          />
        ))}
      </div>

      {/* Fecha simple */}
      <span className="text-3xl font-bold mt-4">
        {formatDate(currentTime)}
      </span>
    </div>
  );
};

const SimpleDigitFlip = ({ char, index }: { 
  char: string; 
  index: number; 
}) => {
  const isColon = char === ':';

  if (isColon) {
    return (
      <span className="mx-1">
        {char}
      </span>
    );
  }

  return (
    <motion.span
      key={`${index}-${char}`}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.4,
        ease: "easeOut"
      }}
      className="inline-block mx-0.5"
    >
      {char}
    </motion.span>
  );
};