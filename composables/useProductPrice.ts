import { getMaxPrice } from "../utils/utils";

export const useProductPrice = () =>
  useState<number[]>("product-price", () => [0, getMaxPrice()]);
