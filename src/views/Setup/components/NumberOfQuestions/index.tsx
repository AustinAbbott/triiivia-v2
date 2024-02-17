// TODO: make list dynamic based on how many questions are available for a given category

import { FC } from "react";

type NumberOfQuestionsProps = {
  setSelectedNumberOfQuestions: (arg: string) => void;
};

export const NumberOfQuestions: FC<NumberOfQuestionsProps> = (props) => {
  return (
    <div>
      <select
        onChange={(e) =>
          props.setSelectedNumberOfQuestions(e.currentTarget.value)
        }
      >
        <option disabled selected>
          -- select --
        </option>
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
        <option>30</option>
      </select>
    </div>
  );
};
