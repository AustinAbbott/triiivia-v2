import { FC } from "react";

type FinishScreenProps = {
  score: number;
};

export const FinishScreen: FC<FinishScreenProps> = (props) => {
  return <div>{props.score}</div>;
};
