// import logo from "./logo.svg";
import "./App.scss";
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
      </header>
      <div>
        {!questions && <Setup setQuestions={setQuestions} />}
        {questions && <Game questions={questions} />}
      </div>
    </div>
  );
}

export default App;
