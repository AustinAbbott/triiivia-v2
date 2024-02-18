// TODO: make list dynamic based on how many questions are available for a given category
import { FC } from "react";
import "../style.css";
import { Dropdown } from "../../../../components/Dropdown";

type NumberOfQuestionsProps = {
  selectedNumberOfQuestions?: string;
  setSelectedNumberOfQuestions: (arg: string) => void;
};

const NumberOfQuestions: FC<NumberOfQuestionsProps> = (props) => {
  return (
    <div className="dropdown">
      <Dropdown
        options={["5", "10", "15", "20", "30"]}
        placeholder="Number of Questions"
        selectedOption={props.selectedNumberOfQuestions}
        setSelectedOption={props.setSelectedNumberOfQuestions}
      />
    </div>
  );
};

export default NumberOfQuestions;
