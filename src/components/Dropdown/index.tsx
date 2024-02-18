import { FC, useEffect, useRef, useState } from "react";
import "./style.css";

type DropdownProps = {
  placeholder: string;
  options?: any[];
  selectedOption?: string;
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
    <div className="drop-down-container" ref={listRef}>
      <button
        className="drop-down-open-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.selectedOption || props.placeholder}
      </button>
      <div className="dropdown-list-container">
        <div className="dropdown-list">
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
