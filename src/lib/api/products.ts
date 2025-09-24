import {IProduct, IProductsResponse} from "@/types/products";

export async function fetchProducts(): Promise<IProduct[]> {
  try {
    const response = await fetch(`https://dummyjson.com/products`, {
      cache: "force-cache",
      next: { revalidate: 60 }  // ISR
    });
    const json: IProductsResponse = await response.json();
    return json.products;
  } catch (err) {
    console.error(err);
    return [];
  }
}