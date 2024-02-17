import logo from "./logo.svg";
import "./App.css";
import { Setup } from "./views/Setup";
import { useState } from "react";
import { Game } from "./views/Game";
import { QuestionResponse } from "./constants";

function App() {
  // TODO: Add type for question
  const [questions, setQuestions] = useState<QuestionResponse[] | undefined>();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Setup setQuestions={setQuestions} />
        <Game />
      </header>
    </div>
  );
}

export default App;
