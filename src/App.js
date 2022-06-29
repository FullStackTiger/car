import { Provider } from "react-redux";
import { store } from "./store";
import { CarsScreen } from "./screen/cars";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <CarsScreen />
    </Provider>
  );
}

export default App;
