import NextQuestion from "./NextQuestion";
import Option from "./Option";
import Timer from "./Timer";

const optionLabel = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
};

const Questions = ({ dispatch, question, questionLen, answer, seconds }) => {
  return (
    <div className="question-wrapper">
      <h3>
        {`${question.id}. `}
        {question.question}
      </h3>
      <div className="options">
        {question.options.map((option, index) => {
          return (
            <Option
              option={option}
              key={option}
              label={optionLabel[index]}
              dispatch={dispatch}
              correct={question.correctOption}
              answer={answer}
              optIndex={index}
              score={question.points}
            />
          );
        })}
      </div>
      <div className="question-footer">
        <Timer seconds={seconds} dispatch={dispatch} />
        <NextQuestion dispatch={dispatch} questionLen={questionLen} currentQues={question.id} key={question.id} />
      </div>
    </div>
  );
};
export default Questions;
