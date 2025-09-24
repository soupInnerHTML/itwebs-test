import {Props} from "@/types/props";
import {IProduct} from "@/types/products";

export interface IProductProps extends Props<IProduct> {
  index: number
}
