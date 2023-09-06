import { useEffect } from "react";

const wait = async (ms) => {
  return new Promise((reolve, reject) => {
    setTimeout(() => {
      reolve();
    }, ms);
  });
};

const Loading = ({ dispatch }) => {
  useEffect(() => {
    async function fetchQuestions() {
      try {
        await wait(1500);
        const data = await fetch("https://json-mock-api-22ro.onrender.com/api/questions");
        const json = await data.json();
        dispatch({ type: "ready", payload: json });
      } catch (err) {
        dispatch({ type: "error" });
        console.error("something went wrong" + err);
      }
    }

    fetchQuestions();
  }, [dispatch]);

  return (
    <div className="loader-wrapper">
      <span className="loader"></span>
      <span>Loading Questions</span>
    </div>
  );
};
export default Loading;
