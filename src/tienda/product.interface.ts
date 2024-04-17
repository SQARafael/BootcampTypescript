import { ProductCategory } from "./product-category.enum";

export interface Product{
    id:number;
    name:string;
    category: ProductCategory;
    price: number
}