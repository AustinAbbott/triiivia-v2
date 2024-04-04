import { FC, useEffect, useState } from "react";
import { AvailableQuestionsResponse, Category } from "../../../../constants";
import TriviaApi from "../../../../TriviaApi";

import "../style.scss";
import { Dropdown } from "../../../../components/Dropdown";
import Utils from "../../../../utils/utils";

type CategoriesProps = {
  loading: boolean;
  selectedCategory?: Category;
  setAvailableQuestions: (arg?: AvailableQuestionsResponse) => void;
  setSelectedCategory: (arg?: Category) => void;
  setLoading: (arg: boolean) => void;
};

const Categories: FC<CategoriesProps> = (props) => {
  const [categories, setCategories] = useState<undefined | Category[]>(
    undefined
  );
  const [error, setError] = useState<undefined | string>(undefined);

  useEffect(() => {
    props.setLoading(true);

    TriviaApi.getCategories()
      .then((categories: Category[]) => setCategories(categories))
      .catch((e: any) => setError(e))
      .finally(() => props.setLoading(false));
  }, []);

  const handleSelection = async (value: string) => {
    setError(undefined);

    const selectedCategory = categories?.find(
      (category) => category.name === value
    );

    if (!selectedCategory) return;

    props.setSelectedCategory(selectedCategory);
    props.setLoading(true);

    await TriviaApi.getQuestionCountForCategory(selectedCategory.id)
      .then((res: AvailableQuestionsResponse) =>
        props.setAvailableQuestions(res)
      )
      .catch((e: any) => setError(e))
      .finally(() => props.setLoading(false));
  };

  const sortedCategoryNames = categories
    ?.sort(Utils.categoryNameSort)
    .map((categoryObject) => categoryObject.name);

  return (
    <div className="drop-down-container">
      <Dropdown
        disabled={!sortedCategoryNames}
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
