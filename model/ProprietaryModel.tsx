import { InventoryModel } from "./InventoryModel";

export interface ProprietaryModel{
    id: number;
    name: string;
    contactInfo: string;
    hashedPassword: string;
    inventories: Array<InventoryModel>;

}