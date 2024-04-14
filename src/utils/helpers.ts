export const getFoodName = (
  foodID: number,
  foodList: { [key: string]: string }
) => {
  if (foodList && foodList[foodID]) {
    return foodList[foodID];
  } else {
    return "Некорректный ID еды";
  }
};
