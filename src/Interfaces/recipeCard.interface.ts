export interface RecipeCardProps {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  ingredients?: string[];
  instructions?: string[];
  // onSelectItem: (item: string) => void;
}
