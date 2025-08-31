import {create} from 'zustand'
import turns_data from './testing/Turnero.json';

type Turns = {
  DNI: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  turnId: string;
  isPriority: boolean;
  takedDate: string;
  asignedDate: string;
  asignedTime: string;
  dispatchTime: string | null;
};

type Store = {
    turnerMode: 'advertisement' | 'simple',
    setTurnerMode: (mode: 'advertisement' | 'simple') => void
    today: string
    raw_turns: Turns[]
    orderedTurns: Turns[]
    isController: boolean,
    toggleController: () => void
    assignDispatchTimeToFirstTurn: () => void,
    animationPhase: 'idle' | 'exiting' | 'shifting' | 'entering';
    setAnimationPhase: (phase: 'idle' | 'exiting' | 'shifting' | 'entering') => void;
}

export const useStore = create<Store>((set, get) => {
    const today = "29/8/2025";
    const raw_turns: Turns[] = turns_data;

    const getOrderedTurns = (turns: Turns[]) => {
        return turns
            .filter((t: Turns) => t.asignedDate === today && t.dispatchTime === null)
            .sort((a: Turns, b: Turns) => {
                if (a.asignedTime === b.asignedTime) {
                    if (a.isPriority && !b.isPriority) return -1;
                    if (!a.isPriority && b.isPriority) return 1;
                    return 0;
                }
                return a.asignedTime.localeCompare(b.asignedTime);
            });
    };

    return {
        turnerMode: 'simple',
        setTurnerMode: (mode) => set({ turnerMode: mode }),
        today,
        raw_turns,
        orderedTurns: getOrderedTurns(raw_turns),
        isController: false,
        toggleController: () => set({ isController: !get().isController }),
        
        animationPhase: 'idle',
    setAnimationPhase: (phase) => set({ animationPhase: phase }),
    
    assignDispatchTimeToFirstTurn: async () => {
        const { raw_turns, orderedTurns, setAnimationPhase } = get();
        
        if (orderedTurns.length === 0) return;
        
        // Fase 1: Exit
        setAnimationPhase('exiting');
        await new Promise(resolve => setTimeout(resolve, 400)); // Duración de exit
        
        // Actualizar datos
        const firstTurn = orderedTurns[0];
        const now = new Date();
        const currentTime = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
        
        const updatedRawTurns = raw_turns.map(turn => 
            turn.turnId === firstTurn.turnId && turn.asignedDate === firstTurn.asignedDate
                ? { ...turn, dispatchTime: currentTime }
                : turn
        );
        
        const updatedOrderedTurns = getOrderedTurns(updatedRawTurns);
        
        set({ 
            raw_turns: updatedRawTurns,
            orderedTurns: updatedOrderedTurns
        });
        
        // Fase 2: Shifting
        setAnimationPhase('shifting');
        await new Promise(resolve => setTimeout(resolve, 300)); // Duración de shifting
        
        // Fase 3: Entering
        setAnimationPhase('entering');
        await new Promise(resolve => setTimeout(resolve, 400)); // Duración de entering
        
        // Volver a idle
        setAnimationPhase('idle');
    }
    };
});