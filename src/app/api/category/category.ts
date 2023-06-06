import { CategoryType } from "@/app/types/category";
import backendUrl from "../backend";

async function getCategory(): Promise<CategoryType[]> {
 const response = await fetch(`${backendUrl}/api/category`, {
  method: "GET",
  headers: {
   "Content-Type": "application/json"
  },
 })

 return await response.json();
}

async function getCategoryById(id: number): Promise<CategoryType> {
 const response = await fetch(`${backendUrl}/api/category/${id}`, {
  method: "GET",
  headers: {
   "Content-Type": "application/json"
  },
 })

 return await response.json();
}


const Category = {
 getCategory,
 getCategoryById
}

export default Category;