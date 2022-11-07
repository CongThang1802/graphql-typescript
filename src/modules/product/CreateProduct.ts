import { Arg, Mutation, Resolver } from "type-graphql";
import { getCustomRepository } from "typeorm";
import { Product } from "../../models/Product";
import { ProductRepository } from "../../repositories/ProductRepository";
import { InputProduct } from "./InputCreateProduct";

@Resolver((_type) => Product)
export class createProduct {
  @Mutation((_type) => Product)
  async createProduct(@Arg("data") inputData: InputProduct): Promise<Product> {
    const productRepository = getCustomRepository(ProductRepository);
    const product = productRepository.create({
      code: inputData.code,
      name: inputData.name,
      category: { id: inputData.categoryId },
    });
    await productRepository.save(product);
    return product;
  }
}
