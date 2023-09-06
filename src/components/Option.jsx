const Option = ({ option, label, dispatch, correct, answer, optIndex, score }) => {
  return (
    <button
      className={`btn btn-option ${answer !== null ? (correct === optIndex ? "correct" : "wrong") : ""}`}
      onClick={() => dispatch({ type: "answer", payload: { optIndex, score, correct } })}
      disabled={answer !== null}>
      <span className="label-option">[{`${label}`}] </span>
      {option}
    </button>
  );
};
export default Option;
