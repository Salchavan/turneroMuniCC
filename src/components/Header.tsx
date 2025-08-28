import { Clock } from "./Clock";

type Props = {
    color: string;
    grid: string;
}

export const Header = ({ color, grid }: Props) => {
  return <div className={`${grid} ${color} flex justify-evenly items-center  p-15`}>
    <img src="https://coloniacaroya.gov.ar/wp-content/uploads/2023/10/logo-colonia-caroya-ciudad-ok.png" alt="Logo de la municipalidad " />
    <Clock />
  </div>;
};
