export const carListSelector = (state) => {
  const { ui, cars } = state;

  if (!ui.listed) {
    return cars.enties;
  }

  return cars.enties.filter((car) => car.status);
};
