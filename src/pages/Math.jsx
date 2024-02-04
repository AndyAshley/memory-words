import { getRandomEquation } from "../data/mathChallenges";
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
      <div id="math-container">
        {showAnswer ? (
          <p data-type={`${currentProblem.type}`}>{currentProblem.answer}</p>
        ) : (
          <div div className="math_wrapper">
            <div className="first_number" data-type={`${currentProblem.type}`}>
              {currentProblem.equation.firstNumber}
            </div>
            <div className="operator" data-type={`${currentProblem.type}`}>
              {currentProblem.equation.operator}
            </div>
            <div className="second_number" data-type={`${currentProblem.type}`}>
              {currentProblem.equation.secondNumber}
            </div>
          </div>
        )}
      </div>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? "Return" : "Show Answer"}
        </button>
        <button onClick={handleNext}>next</button>
      </div>
    </>
  );
};

export default Math;
