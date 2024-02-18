// import logo from "./logo.svg";
import "./App.css";
import { Setup } from "./views/Setup";
import { useState } from "react";
import { Game } from "./views/Game";
import { QuestionResponse } from "./constants";

function App() {
  const [questions, setQuestions] = useState<QuestionResponse[] | undefined>();

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>triiivia</h1>
        <Setup setQuestions={setQuestions} />
        <Game questions={questions} />
      </header>
    </div>
  );
}

export default App;
