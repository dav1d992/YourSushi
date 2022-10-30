import { Category } from './category';
import { Ingredient } from './ingredient';
import { Review } from './review';

export class Dish {
  constructor(
    public name: string,
    public category: Category,
    public ingredients: Ingredient[],
    public review: Review
  ) {}
}
