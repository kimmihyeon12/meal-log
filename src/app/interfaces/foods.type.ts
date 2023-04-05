export interface IFoods {
  id: number,
  name: string
}

export interface IFoodDetail extends IFoods {
  brend: string,
  food_name: string,
  size: number,
  sizeUnit: string
  kcal: number,
  province: number,
  carbohydrate: number,
  protein: number,
  sugar: number,
  cholesterol: number,
  sodium: number,
}