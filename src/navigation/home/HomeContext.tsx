import React from "react";
import { createContext } from "react";
import CategoryModel from "../../models/CategoryModel";
import DepartmentModel from "../../models/DepartmentModel";
import ProductModel from "../../models/ProductModel";

const returnType: any = {};
const department: DepartmentModel = Object.create(null);
const category: CategoryModel = Object.create(null);
const product: ProductModel = Object.create(null);

const HomeContext = createContext({
  currentDepartment: department,
  currentCategory: category,
  currentProduct: product,
  setCurrentDepartment: (department: DepartmentModel) => returnType,
  setCurrentCategory: (category: CategoryModel) => returnType,
  setCurrentProduct: (product: ProductModel) => returnType,
});

export default HomeContext;
