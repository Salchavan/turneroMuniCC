
type Props = {
    grid: string;
}

export const CurrentTurn = ({ grid }: Props) => {
  return (
    <div className={`${grid} flex flex-col items-center`}>
      <h2 className='text-7xl font-bold mt-10 mb-10'>Siguiente:</h2>
      <div className='text-9xl m-4 p-2 bg-blue-100 h-100 w-200 flex justify-center items-center rounded-2xl'>
        125T
      </div>
    </div>
  );    
};
