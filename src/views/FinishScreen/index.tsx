import { FC } from "react";
import "./style.scss";

import finishStar from "../../finish-star.svg";

type FinishScreenProps = {
  score: number;
  total: number;
};

const FinishText: FC<FinishScreenProps> = (props) => {
  if (props.score === 0) {
    return <div>You didn't get any correct. Maybe sports are your thing?</div>;
  }

  return (
    <div>
      You got {props.score} of {props.total} correct!
    </div>
  );
};

export const FinishScreen: FC<FinishScreenProps> = (props) => {
  return (
    <div className="result-area">
      <FinishText {...props} />
      <div>
        <img alt="Star icon to indicate end of game" src={finishStar} />
      </div>
    </div>
  );
};
