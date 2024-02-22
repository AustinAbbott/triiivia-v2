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
        <h1>triiivia</h1>
      </header>
      {!questions?.length && <Setup setQuestions={setQuestions} />}
      {!!questions?.length && <Game questions={questions} />}
      {!!questions && !questions.length && (
        <div>Sorry, we don't have any questions for those selections 😔</div>
      )}
    </div>
  );
}

export default App;
