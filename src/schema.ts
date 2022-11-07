import { buildSchema } from "type-graphql";

import { CreateCategory } from "./modules/category/CreateCategory";
import { DetailCategories } from "./modules/category/DetailCategory";
import { GetCategories } from "./modules/category/GetCategories";
import { createProduct } from "./modules/product/CreateProduct";
import { DetailProducts } from "./modules/product/DetailProduct";
import { GetProducts } from "./modules/product/GetProducts";

export default (Container: any) => {
  return buildSchema({
    container: Container,
    resolvers: [
      CreateCategory,
      GetCategories,
      DetailCategories,
      GetProducts,
      createProduct,
      DetailProducts,
    ],
  });
};
