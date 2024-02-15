import logo from "./logo.svg";
import "./App.css";
import { CategoryList } from "./components/CategoryList";
import { Difficulty } from "./components/Difficulty";
import { NumberOfQuestions } from "./components/NumberOfQuestions";
import { Mode } from "./components/Mode";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NumberOfQuestions />
        <CategoryList />
        <Difficulty />
        <Mode />
      </header>
    </div>
  );
}

export default App;
