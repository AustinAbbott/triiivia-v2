import { FC } from "react";

import "./style.scss";

type StartButtonProps = {
  loading: boolean;
  readyToGo: boolean;
  handleStartClick: () => void;
};

const StartButton: FC<StartButtonProps> = (props) => {
  return (
    <button
      className="start-button"
      disabled={!props.readyToGo ?? props.loading}
      onClick={props.handleStartClick}
    >
      Start Game!
    </button>
  );
};

export default StartButton;
