import { useStore } from "../Store";

export const Controller = () => {
  const assignDispatchTimeToFirstTurn = useStore((state) => state.assignDispatchTimeToFirstTurn);

  return (
    <div className="absolute top-5 left-5 flex flex-col items-center bg-blue-500 p-2">
      <h1 className="text-white text-2xl mb-2">Controlador</h1>
      <div className="flex space-x-4">
        <button className="bg-blue-300 text-black px-4 py-2 rounded hover:bg-blue-200 active:bg-blue-100 active:scale-90">
          Ver historial
        </button>
        <button 
          className="bg-blue-300 text-black px-4 py-2 rounded hover:bg-blue-200 active:bg-blue-100 active:scale-90" 
          onClick={assignDispatchTimeToFirstTurn} // Sin arrow function innecesaria
        >
          Avanzar turno
        </button>
      </div>
    </div>
  );
};