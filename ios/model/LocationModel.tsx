import { ProductModel } from "./ProductModel";

export interface LocationModel{
    id: number;
    name: string;
    description: string;
    adress: string;
    product: Array<ProductModel>;

}