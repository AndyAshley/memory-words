import { getRandomEquation } from "./data/mathChallenges";
import { useState } from "react";

const Math = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const initialProblem = getRandomEquation();
  const [currentProblem, setCurrentProblem] = useState({
    equation: initialProblem.equation,
    answer: initialProblem.answer,
    type: "math",
    display: "Math Challenge",
  });

  const handleNext = () => {
    const { equation, answer } = getRandomEquation();
    setShowAnswer(false);
    setCurrentProblem({
      ...currentProblem,
      equation,
      answer,
    });
  };
  return (
    <>
      <div id="main-container">
        <div></div>
        {showAnswer ? (
          <p id="word-display" data-type={`${currentProblem.type}`}>
            {currentProblem.answer}
          </p>
        ) : (
          <p id="word-display" data-type={`${currentProblem.type}`}>
            {currentProblem.equation}
          </p>
        )}
        <div></div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setShowAnswer(!showAnswer)}>Show Answer</button>
        <button onClick={handleNext}>next</button>
      </div>
    </>
  );
};

export default Math;
