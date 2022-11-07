import { Query, Resolver } from "type-graphql";
import { InjectRepository } from "typeorm-typedi-extensions";
import { ProductRepository } from "../../repositories/ProductRepository";
import { Product } from "./../../models/Product";

@Resolver((_type) => Product)
export class GetProducts {
  constructor(
    @InjectRepository(ProductRepository)
    private readonly productRepository: ProductRepository
  ) {}

  @Query((_type) => [Product])
  async getProduct(): Promise<Product[]> {
    const products = await this.productRepository.find({
      relations: ["category"],
    });
    return products;
  }
}
