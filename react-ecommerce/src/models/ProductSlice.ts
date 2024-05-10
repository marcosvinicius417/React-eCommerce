import { Product } from "./Product";

export interface ProductSlice {
  allProducts: Product[];
  newProducts: Product[];
  featuredProducts: Product[];
  categories: string[];
}
