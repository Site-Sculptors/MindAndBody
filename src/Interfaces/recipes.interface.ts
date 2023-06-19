export interface RecipesProps {
  recipes: RecipesCardProps[]; // Corrected interface definition
  setRecipes: React.Dispatch<React.SetStateAction<RecipesCardProps[]>>;
  onSelectItem: (recipe: Recipe) => void;
}

//-------------Interface for incoming recipes--------------------//

export interface RecipesCardProps {
  count: number;
  from: number;
  hits: Hit[];
  more: boolean;
  q: string;
  to: number;
}

export interface Hit {
  recipe: Recipe;
}

export interface Recipe {
  calories?: number;
  cautions?: string[];
  cuisineType?: string[];
  dietLabels?: string[];
  digest?: Digest[];
  dishType?: DishType[];
  healthLabels?: string[];
  image?: string;
  ingredientLines?: string[];
  ingredients?: Ingredient[];
  label?: string;
  mealType?: MealType[];
  shareAs?: string;
  source?: string;
  totalDaily?: { [key: string]: Total };
  totalNutrients?: { [key: string]: Total };
  totalTime?: number;
  totalWeight?: number;
  uri?: string;
  url?: string;
  yield?: number;
}

export interface Digest {
  daily: number;
  hasRDI: boolean;
  label: string;
  schemaOrgTag: SchemaOrgTag | null;
  sub?: Digest[];
  tag: string;
  total: number;
  unit: Unit;
}

export enum SchemaOrgTag {
  CarbohydrateContent = "carbohydrateContent",
  CholesterolContent = "cholesterolContent",
  FatContent = "fatContent",
  FiberContent = "fiberContent",
  ProteinContent = "proteinContent",
  SaturatedFatContent = "saturatedFatContent",
  SodiumContent = "sodiumContent",
  SugarContent = "sugarContent",
  TransFatContent = "transFatContent",
}

export enum Unit {
  Empty = "%",
  G = "g",
  Kcal = "kcal",
  Mg = "mg",
  Μg = "µg",
}

export enum DishType {
  CondimentsAndSauces = "condiments and sauces",
  MainCourse = "main course",
  Starter = "starter",
}

export interface Ingredient {
  foodCategory: string;
  foodId: string;
  image: null | string;
  text: string;
  weight: number;
}

export enum MealType {
  Brunch = "brunch",
  LunchDinner = "lunch/dinner",
}

export interface Total {
  label: string;
  quantity: number;
  unit: Unit;
}
