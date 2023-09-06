import { useReducer } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";
import Questions from "./components/Questions";
import Loading from "./components/Loading";
import FinishScreen from "./components/FinishScreen";

const initialState = {
  status: "start",
  questions: [],
  queIndex: 0,
  answer: null,
  score: 0,
  seconds: 300,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, status: "loading" };
    case "ready":
      return { ...state, status: "ready", questions: action.payload };
    case "nextQue":
      return { ...state, queIndex: state.queIndex + 1, answer: null };
    case "answer":
      return {
        ...state,
        answer: action.payload.optIndex,
        score: action.payload.correct === action.payload.optIndex ? state.score + action.payload.score : state.score,
      };
    case "finish":
      return { ...state, status: "finish" };
    case "timer":
      return { ...state, seconds: state.seconds - 1, status: state.seconds === 0 ? "finish" : state.status };
    case "restart":
      return initialState;
    default:
      throw new Error("action type not defined");
  }
}

function App() {
  const [{ status, queIndex, questions, answer, score, seconds }, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <header className="qz-header">
        <div className="container">
          <h1>React Quiz</h1>
        </div>
      </header>
      <div className="background">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <main>
        <div className="container">
          {status === "start" && <StartScreen dispatch={dispatch} />}
          {status === "loading" && <Loading dispatch={dispatch} />}
          {status === "ready" && (
            <Questions
              question={questions[queIndex]}
              dispatch={dispatch}
              questionLen={questions.length}
              answer={answer}
              seconds={seconds}
            />
          )}
          {status === "finish" && <FinishScreen score={score} questions={questions} dispatch={dispatch} />}
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
