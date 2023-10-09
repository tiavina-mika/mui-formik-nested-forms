export interface IRecipe {
  exportedTo: any[]
  sections: Section[]
  season: string[]
  internalTag: InternalTag[]
  description: any[]
  tva: any[]
  foodCostPCT: FoodCostPct[]
  ingredients: Ingredient[]
  brands: string[]
  dlc: any[]
  heatingInstructions: HeatingInstruction[]
  instructions: any[]
  packaging: Packaging[]
  price: any[]
  subPackaging: SubPackaging[]
  reusablePackaging: ReusablePackaging[]
  reusableSubPackaging: ReusableSubPackaging[]
  appImage: any[]
  defaultValues: DefaultValues
  kitchenImage: any[]
  packagingSZ: any
  isActive: boolean
  sameInstructions: any
  portionPerPlate: number
  gesters: number
  status: string
  internalProduct: any
  difficulty: number
  name: string
  commercialName: string
  type: string
  specialInstruction: string
  preparation: string
  comments: any
  sameDescriptions: any
  foodcost: number
  grossWeight: number
  netWeight: number
  nutritionInformation: NutritionInformation
  ingredientsComplexity: number
  uniqueCode: string
  maxProd: number
  exportEtiquettable: number
  spicy: any
  ean: string
  commercialNames: any[]
  createdAt: string
  updatedAt: string
  objectId: string
}

export interface Section {
  __type: string
  className: string
  objectId: string
}

export interface InternalTag {
  name: string
  type: string
  createdAt: string
  updatedAt: string
  rules: Rule[]
  objectId: string
  __type: string
  className: string
}

export interface Rule {
  expected: boolean
  function: string
  key: string
  args: any[]
}

export interface FoodCostPct {
  brand: string
  value: number
}

export interface Ingredient {
  supplierItem: SupplierItem
  percentage: number
}

export interface SupplierItem {
  __type: string
  className: string
  objectId: string
}

export interface HeatingInstruction {
  brand: string
  value: Value
}

export interface Value {
  microwave: Microwave
  oven: Oven
  pan: Pan
}

export interface Microwave {
  power: number
  duration: number
  instructions: string
}

export interface Oven {
  power: number
  duration: number
  instructions: string
}

export interface Pan {
  power: number
  duration: number
  instructions: string
}

export interface Packaging {
  brand: string
  value?: Value2
}

export interface Value2 {
  name: string
  type: string
  categories: string
  price: string
  reference: string
  createdAt: string
  updatedAt: string
  brands: string[]
  reusable: boolean
  deepth: number
  height: number
  weight: string
  width: number
  nature: string
  quantity: string
  objectId: string
  __type: string
  className: string
}

export interface SubPackaging {
  brand: string
  value: any[]
}

export interface ReusablePackaging {
  brand: string
  value: Value3
}

export interface Value3 {
  brands: string[]
  reference: string
  name: string
  price: string
  type: string
  nature: string
  categories: string
  createdAt: string
  updatedAt: string
  objectId: string
  __type: string
  className: string
}

export interface ReusableSubPackaging {
  brand: string
  value: any[]
}

export interface DefaultValues {
  appImage: AppImage
  price: number
  dlc: number
  description: string
  instructions: string
  heatingInstructions: any
  tva: number
  commercialName: string
}

export interface AppImage {
  publicId: string
}

export interface NutritionInformation {
  carboneScore: string
  nutriscore: string
  sustainableFishing: boolean
  carbonFootPrint: number
  calories: number
  seasonalIngredientsRate: number
  frenchIngredientsRate: number
  localIngredientsRate: number
  organicIngredientsRate: number
  certifiedIngredientsRate: number
  proteins: number
  carbohydrates: number
  sugar: number
  fibers: number
  fat: number
  saturatedFattyAcids: number
  salt: number
  healthyRate: string
  socialRate: string
  glycemicLoad: number
  glycemicIndex: any
  per100: Per100
}

export interface Per100 {
  sugar: any
  proteins: number
  calcium: number
  copper: number
  iron: number
  magnesium: number
  manganese: number
  phosphorus: number
  potassium: number
  selenium: number
  zinc: number
  vitaminD: number
  vitaminC: number
  vitaminA: number
  omega6: number
  omega3: number
  sugarAdd: any
}
