import "./App.scss";
import { Setup } from "./views/Setup";
import { useState } from "react";
import { Game } from "./views/Game";
import { QuestionResponse } from "./constants";

function App() {
  const [questions, setQuestions] = useState<QuestionResponse[] | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [apiError, setApiError] = useState<any>(undefined);

  const getView = () => {
    if (!questions?.length) {
      return (
        <Setup
          loading={loading}
          setApiError={setApiError}
          setLoading={setLoading}
          setQuestions={setQuestions}
        />
      );
    }

    if (questions.length) {
      return <Game questions={questions} setQuestions={setQuestions} />;
    }

    return null;
  };

  return (
    <div className="App">
      <div className={loading ? "divider-loading" : "divider"} id="top"></div>

      <header className="App-header">
        <h1>triiivia</h1>
      </header>
      {getView()}

      {!!questions && !questions.length && !loading && (
        <div>Sorry, we don't have any questions for those selections 😔</div>
      )}

      {!!apiError && <div>Sorry, something went wrong</div>}
      <div
        className={loading ? "divider-loading" : "divider"}
        id="bottom"
      ></div>
    </div>
  );
}

export default App;
