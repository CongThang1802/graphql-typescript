import { Resolver, Query, Arg } from "type-graphql";
import { InjectRepository } from "typeorm-typedi-extensions";

import { Category } from "../../models/Category";
import { CategoryRepository } from "../../repositories/CategoryRepository";

@Resolver((_type) => Category)
export class DetailCategories {
  constructor(
    @InjectRepository()
    private readonly categoryRepository: CategoryRepository
  ) {}

  @Query((_type) => Category)
  public async detailCategories(@Arg("id") id: number): Promise<Category> {
    const categories = await this.categoryRepository.findOne({
      where: { id },
      relations: ["products"],
    });

    return categories;
  }
}
