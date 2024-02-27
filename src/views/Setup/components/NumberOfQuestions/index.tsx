import { FC } from "react";
import "../style.scss";
import { Dropdown } from "../../../../components/Dropdown";
import { AvailableQuestionsResponse } from "../../../../constants";
import Utils from "../../../../utils/utils";

type NumberOfQuestionsProps = {
  availableQuestions?: AvailableQuestionsResponse;
  selectedDifficulty?: string;
  selectedNumberOfQuestions?: string;
  setSelectedNumberOfQuestions: (arg: string) => void;
};

const NumberOfQuestions: FC<NumberOfQuestionsProps> = (props) => {
  return (
    <div className="drop-down-container">
      <Dropdown
        options={Utils.generateNumberOfQuestions(
          props.availableQuestions,
          props.selectedDifficulty
        )}
        placeholder="Number of Questions"
        selectedOption={props.selectedNumberOfQuestions}
        setSelectedOption={props.setSelectedNumberOfQuestions}
        testId="NumberOfQuestions"
      />
    </div>
  );
};

export default NumberOfQuestions;
