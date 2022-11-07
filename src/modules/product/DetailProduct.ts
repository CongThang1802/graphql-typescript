import { Arg, Query, Resolver } from "type-graphql";
import { InjectRepository } from "typeorm-typedi-extensions";
import { ProductRepository } from "../../repositories/ProductRepository";
import { Product } from "./../../models/Product";

@Resolver((_type) => Product)
export class DetailProducts {
  constructor(
    @InjectRepository(ProductRepository)
    private readonly productRepository: ProductRepository
  ) {}

  @Query((_type) => Product)
  async detailProduct(@Arg("id") id: number): Promise<Product> {
    const products = await this.productRepository.findOne({
      where: { id },
      cache: true,
      relations: ["category"],
    });
    if (!products) {
      throw new Error("Product not found");
    }
    return products;
  }
}
