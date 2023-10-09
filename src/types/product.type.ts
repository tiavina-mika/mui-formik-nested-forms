import { IRecipe } from "./recipe.type";

interface IProduct {
  product: IRecipe | null;
  quantity: number | null;
}
export interface IProductFormValues {
  products: IProduct[];
}
