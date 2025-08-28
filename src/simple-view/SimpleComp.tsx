import {Header} from '../components/Header';
import {NextTurnList} from '../components/NextTurnList'
import { CurrentTurn } from '../components/CurrtetTurn';

export const SimpleComp = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-5 h-full w-full'>
      <Header color="bg-blue-200" grid="col-span-3" />
      <NextTurnList grid='col-span-1 row-span-4'/>
      <CurrentTurn grid='col-span-2 row-span-4'/>
    </div>
  );
};


