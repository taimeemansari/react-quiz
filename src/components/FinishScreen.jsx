const FinishScreen = ({ score, questions, dispatch }) => {
  const maxScore = questions.reduce((prev, curr) => {
    return prev + curr.points;
  }, 0);

  const percentage = (score / maxScore) * 100;

  return (
    <div className="finish-screen">
      <h2>Your Score</h2>
      <div className={`percentage ${score > 80 ? "pass" : "fail"}`}>{`${percentage.toFixed(2)}%`}</div>
      <div className="status">
        {score > 80 ? "Congrats! You have Qualified the Quiz" : "Sorry! You have failed for Qualification"}
      </div>
      <button className="btn btn-retake" onClick={() => dispatch({ type: "restart" })}>
        Re-take Quiz
      </button>
    </div>
  );
};
export default FinishScreen;
