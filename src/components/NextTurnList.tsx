import {MOCK_DATA} from '../testing/MOCK_DATA'

type Props ={
  grid: String
}
export const NextTurnList = ({grid}: Props) => {
  return (
    <div className={`${grid} flex flex-col overflow-hidden items-center`}>
      <h2 className='text-4xl font-bold mt-10 mb-10'>Siguientes turnos:</h2>
      <ul>
        {MOCK_DATA.map((turn) => (
        <li key={turn.idTurn} className='text-6xl m-4 p-2 bg-blue-100 h-41 w-80 flex justify-center items-center rounded-2xl'>{turn.idTurn}</li>
      ))}
      </ul>
      
    </div>
  );
};
