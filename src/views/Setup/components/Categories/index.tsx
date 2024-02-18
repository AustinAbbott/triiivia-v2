import { FC, useEffect, useState } from "react";
import { Category } from "../../../../constants";
import TriviaApi from "../../../../TriviaApi";

import "../style.css";
import { Dropdown } from "../../../../components/Dropdown";

type CategoriesProps = {
  selectedCategory?: Category;
  setSelectedCategory: (arg: Category) => void;
};

const Categories: FC<CategoriesProps> = (props) => {
  const [categories, setCategories] = useState<undefined | Category[]>(
    undefined
  );
  const [error, setError] = useState<undefined | string>(undefined);

  useEffect(() => {
    TriviaApi.getCategories()
      .then((categories: Category[]) => setCategories(categories))
      .catch((e: any) => setError(e));
  }, []);

  const handleSelection = (value: string) => {
    const selectedCategory = categories?.find(
      (category) => category.name === value
    );

    if (!selectedCategory) return;

    props.setSelectedCategory(selectedCategory);
  };

  const categoryNameSort = (a: Category, b: Category) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  };

  const sortedCategoryNames = categories
    ?.sort(categoryNameSort)
    .map((categoryObject) => categoryObject.name);

  return (
    <div className="dropdown">
      <Dropdown
        options={sortedCategoryNames}
        label="Category"
        selectedOption={props.selectedCategory?.name}
        setSelectedOption={handleSelection}
      />
      {error && <div>Something went wrong while fetching categories</div>}
    </div>
  );
};

export default Categories;
