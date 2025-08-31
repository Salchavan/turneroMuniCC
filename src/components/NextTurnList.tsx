import { useStore } from "../Store";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

type Props = {
  grid: string;
};

export const NextTurnList = ({ grid }: Props) => {
  const orderedTurns = useStore((state) => state.orderedTurns);
  const [displayTurns, setDisplayTurns] = useState(orderedTurns.slice(1));

  useEffect(() => {
    // Animar el deslizamiento hacia arriba cuando cambian los turnos
    if (orderedTurns.slice(1).length < displayTurns.length) {
      // Hay menos turnos, significa que uno se fue hacia arriba
      const timer = setTimeout(() => {
        setDisplayTurns(orderedTurns.slice(1));
      }, 400); // Tiempo para que termine la animación exit
      
      return () => clearTimeout(timer);
    } else {
      setDisplayTurns(orderedTurns.slice(1));
    }
  }, [orderedTurns]);

  return (
    <div className={`${grid} flex flex-col overflow-hidden items-center`}>
      <h2 className="text-4xl font-bold mt-10 mb-10">Siguientes turnos:</h2>
      
      <ul className="w-full max-w-md">
        <AnimatePresence mode="popLayout">
          {displayTurns.map((turn, index) => (
            <motion.li
              key={turn.turnId}
              layout // Animación automática de posición
              initial={{ y: 50, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { 
                  duration: 0.4,
                  ease: "easeOut",
                  delay: index * 0.1
                }
              }}
              exit={{ 
                y: -80, // Se desliza HACIA ARRIBA al desaparecer
                opacity: 0,
                transition: { 
                  duration: 0.3,
                  ease: "easeIn" 
                }
              }}
              className="text-6xl m-4 p-2 bg-blue-100 w-full flex justify-center items-center rounded-2xl overflow-hidden"
            >
              {turn.turnId}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};