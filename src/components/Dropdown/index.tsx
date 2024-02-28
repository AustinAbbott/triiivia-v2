import { FC, useEffect, useRef, useState } from "react";
import "./style.scss";

import polygon from "../../polygon.svg";

type DropdownProps = {
  disabled?: boolean;
  placeholder: string;
  options?: any[];
  selectedOption?: string;
  testId?: string;
  setSelectedOption: (arg: any) => void;
};

export const Dropdown: FC<DropdownProps> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleSelection = (option: string) => {
    props.setSelectedOption(option);
    setIsOpen(false);
  };

  const handleOutsideClick = (e: Event) => {
    if (e.target instanceof Element && !listRef.current?.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className="drop-down"
      data-testid={props.testId ?? "Dropdown"}
      ref={listRef}
    >
      <button
        className="drop-down-open-button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={props.disabled}
      >
        <div className="drop-down-inner-button">
          <div
            className={
              props.selectedOption ? "" : "drop-down-inner-text-unselected"
            }
          >
            {props.selectedOption || props.placeholder}
          </div>
          <div>
            <img
              alt="drop down arrow icon"
              src={polygon}
              className={isOpen ? "drop-down-icon-open" : ""}
            />
          </div>
        </div>
      </button>
      <div className="drop-down-list-container">
        <div className="drop-down-list">
          {isOpen &&
            props.options?.map((option: string) => (
              <button
                className="drop-down-button"
                key={option + Math.random()}
                onClick={() => handleSelection(option)}
                // TODO: get keypress working for ADA
                onKeyUp={() => handleSelection(option)}
              >
                {option}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};
