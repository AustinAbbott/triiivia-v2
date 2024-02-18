import { FC, useState } from "react";
import "./style.css";

type DropdownProps = {
  label: string;
  options: any[];
  selectedOption: any;
  setSelectedOption: (arg: any) => void;
};

export const Dropdown: FC<DropdownProps> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelection = (option: any) => {
    props.setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="drop-down-container">
      <div>{props.label}</div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {props.selectedOption || "Choose"}
      </button>
      <div className="dropdown-list">
        {isOpen &&
          props.options.map((option) => (
            <button onClick={() => handleSelection(option)}>{option}</button>
          ))}
      </div>
    </div>
  );
};
