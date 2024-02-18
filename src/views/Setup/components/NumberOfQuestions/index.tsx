// TODO: make list dynamic based on how many questions are available for a given category
import { FC } from "react";
import "../style.css";

type NumberOfQuestionsProps = {
  setSelectedNumberOfQuestions: (arg: string) => void;
};

export const NumberOfQuestions: FC<NumberOfQuestionsProps> = (props) => {
  return (
    <div className="dropdown">
      <label htmlFor="number-of-questions">Choose Number of Questions: </label>
      <select
        id="number-of-questions"
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
