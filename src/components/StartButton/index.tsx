import { FC } from "react";

import "./style.css";

type StartButtonProps = {
  readyToGo: boolean;
  handleStartClick: () => void;
};

const StartButton: FC<StartButtonProps> = (props) => {
  return (
    <button
      className="start-button"
      disabled={!props.readyToGo}
      onClick={props.handleStartClick}
    >
      Start Game!
    </button>
  );
};

export default StartButton;
