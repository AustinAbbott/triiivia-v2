import { FC, useEffect, useState } from "react";
import { AvailableQuestionsResponse, Category } from "../../../../constants";
import TriviaApi from "../../../../TriviaApi";

import "../style.scss";
import { Dropdown } from "../../../../components/Dropdown";
import Utils from "../../../../utils/utils";

type CategoriesProps = {
  selectedCategory?: Category;
  setAvailableQuestions: (arg?: AvailableQuestionsResponse) => void;
  setSelectedCategory: (arg?: Category) => void;
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

  useEffect(() => {
    if (!props.selectedCategory) return;

    TriviaApi.getQuestionCountForCategory(props.selectedCategory.id)
      .then((res: AvailableQuestionsResponse) =>
        props.setAvailableQuestions(res)
      )
      .catch((e: any) => setError(e));
  }, [props.selectedCategory]);

  const handleSelection = (value: string) => {
    setError(undefined);

    const selectedCategory = categories?.find(
      (category) => category.name === value
    );

    props.setSelectedCategory(selectedCategory);
  };

  const sortedCategoryNames = categories
    ?.sort(Utils.categoryNameSort)
    .map((categoryObject) => categoryObject.name);

  return (
    <div className="drop-down-container">
      <Dropdown
        options={sortedCategoryNames}
        placeholder="Category"
        selectedOption={props.selectedCategory?.name}
        setSelectedOption={handleSelection}
        testId="Categories"
      />
      {error && (
        <div className="error-message">
          Oops, something went wrong while fetching categories
        </div>
      )}
    </div>
  );
};

export default Categories;
