import { ProductModel } from "./ProductModel";
import { ProprietaryModel } from "./ProprietaryModel";

export interface InventoryModel{
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    quantity: number;
    owner: ProprietaryModel;
    products: Array<ProductModel>;

}