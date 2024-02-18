import { ChangeEvent, FC, useEffect, useState } from "react";
import { Category } from "../../../../constants";
import TriviaApi from "../../../../TriviaApi";

import "../style.css";

type CategoriesProps = {
  setSelectedCategory: (arg: Category) => void;
};

export const Categories: FC<CategoriesProps> = (props) => {
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

  const handleSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = categories?.find(
      (category) => category.name === e.currentTarget.value
    );

    if (!selectedCategory) return;

    props.setSelectedCategory(selectedCategory);
  };

  return (
    <div className="dropdown">
      <label htmlFor="category">Choose category: </label>
      <select
        disabled={!sortedCategories}
        id="category"
        onChange={handleSelection}
      >
        <option disabled selected>
          -- select --
        </option>
        {sortedCategories?.map((category) => (
          <option key={category.id}>{category.name}</option>
        ))}
      </select>
      {error && <div>Something went wrong while fetching categories</div>}
    </div>
  );
};
