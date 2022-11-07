import { Field, InputType } from "type-graphql";
import { Product } from "../../models/Product";

@InputType()
export class InputProduct implements Partial<Product> {
  @Field()
  public name!: string;

  @Field()
  public code!: string;

  @Field()
  public categoryId!: number;
}
