import { FC, useEffect, useState } from "react";
import { Category } from "../../constants";
import TriviaApi from "../../TriviaApi";

export const CategoryList: FC = () => {
  const [categories, setCategories] = useState<undefined | Category[]>(
    undefined
  );
  const [error, setError] = useState<undefined | string>(undefined);

  useEffect(() => {
    TriviaApi.getCategories()
      .then((categories: Category[]) => setCategories(categories))
      .catch((e: any) => setError(e));
  }, []);

  const categoryNameSort = (a: Category, b: Category) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  };

  const sortedCategories = categories?.sort(categoryNameSort);

  return (
    <div>
      <select disabled={!sortedCategories}>
        {sortedCategories?.map((category) => (
          <option key={category.id}>{category.name}</option>
        ))}
      </select>
      {error && <div>Something went wrong while fetching categories</div>}
    </div>
  );
};
