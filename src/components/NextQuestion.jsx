const NextQuestion = ({ dispatch, questionLen, currentQues }) => {
  return (
    <div className="next-question">
      {currentQues < questionLen ? (
        <button className="btn btn-next" onClick={() => dispatch({ type: "nextQue" })}>
          Next
        </button>
      ) : (
        <button className="btn btn-finish" onClick={() => dispatch({ type: "finish" })}>
          Finish
        </button>
      )}
    </div>
  );
};
export default NextQuestion;
