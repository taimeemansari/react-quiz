const StartScreen = ({ dispatch }) => {
  return (
    <div className="start-screen">
      <h2>Ready? Let's Start the Quiz</h2>
      <p>You have to score 80% to pass the quiz</p>
      <button className="btn start" onClick={() => dispatch({ type: "start" })}>
        Start Now
      </button>
    </div>
  );
};
export default StartScreen;
