import { createSlice } from "@reduxjs/toolkit";
import initialData from "../../demo/cars.json";

const initialState = {
  enties: initialData,
};

export const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addCarList(state, action) {
      const maxId = Math.max(...state.enties.map((x) => x.id));
      state.enties = [
        ...state.enties,
        { id: maxId + 1, status: false, ...action.payload },
      ];
    },
    editCarList(state, action) {
      const carIndex = state.enties.findIndex(
        (car) => car.id === action.payload.id
      );
      if (carIndex > -1) {
        state.enties[carIndex] = action.payload;
      }
    },
    removeCarList(state, action) {
      const carIndex = state.enties.findIndex(
        (car) => car.id === action.payload.id
      );
      if (carIndex > -1) {
        state.enties.splice(carIndex, 1);
      }
    },
  },
});

export default carSlice.reducer;
