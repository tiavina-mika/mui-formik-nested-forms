interface ISellDay {
  brand: "FOODCHERI" | "SEAZON" | "SEAZON_BE";
  days: string[];
}
interface IBatch {
  productionDay: string;
  packagingDay: string;
  sellDays: ISellDay[];
}
export interface IProductSchema {
  // product: IRecipe | null;
  objectId?: string;
  isNew?: boolean;
  name: string;
  batches: IBatch[];
}
export interface IProductSchemasFormValues {
  productionSchemas: IProductSchema[];
}
