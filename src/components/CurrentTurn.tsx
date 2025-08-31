import { useStore } from '../Store';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
    grid: string;
}

export const CurrentTurn = ({ grid }: Props) => {
  const orderedTurns = useStore((state) => state.orderedTurns);

  const currentTurn = orderedTurns[0];

  return (
    <div className={`${grid} flex flex-col items-center`}>
      <h2 className='text-7xl font-bold mt-10 mb-10'>Siguiente:</h2>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTurn?.turnId || "empty"}
          initial={{ x: -100, opacity: 0, scale: 0.9 }}
          animate={{ 
            x: 0, 
            opacity: 1, 
            scale: 1,
            transition: { 
              duration: 0.5, 
              ease: "easeOut",
            
            }
          }}
          exit={{ 
            x: 100, 
            opacity: 0, 
            scale: 1.1,
            transition: { 
              duration: 0.4, 
              ease: "easeIn" 
            }
          }}
          className='text-9xl m-4 p-2 bg-blue-100 h-100 w-200 flex justify-center items-center rounded-2xl min-h-[200px] min-w-[300px]'
        >
          {currentTurn?.turnId || '---'}
        </motion.div>
      </AnimatePresence>
    </div>
  );    
};