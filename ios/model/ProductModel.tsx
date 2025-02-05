import { InventoryModel } from "./InventoryModel";
import { LocationModel } from "./LocationModel";

export interface ProductModel{
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    location: LocationModel;
    inventory: Array<InventoryModel>;

}