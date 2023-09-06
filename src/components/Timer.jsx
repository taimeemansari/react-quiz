import { useEffect } from "react";

const Timer = ({ seconds, dispatch }) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds - minutes * 60;
  useEffect(() => {
    const timerId = setInterval(() => {
      dispatch({ type: "timer" });
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [dispatch]);
  return (
    <div className="timer">
      <span>Time Remaining</span>
      <span className="time">
        {minutes < 10 && "0"}
        {minutes}:{secs < 10 && "0"}
        {secs}
      </span>
    </div>
  );
};
export default Timer;
