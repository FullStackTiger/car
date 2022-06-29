import { useSelector } from "react-redux";
import { Cars } from "../../components/cars";
import { carListSelector } from "../../store/cars/selectors";
import "./style.scss";

export function CarsScreen() {
  const data = useSelector(carListSelector);

  return (
    <div className="container">
      <Cars data={data} />
    </div>
  );
}

export default CarsScreen;
