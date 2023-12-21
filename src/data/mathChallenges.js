// The numbers that the random equation generator can use (hard-coded for my son's level)
const availableNumbers = {
  level1: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
};

// The operators that the random equation generator can use (hard-coded for my son's level)
const availableOperators = {
  leve1: ["+", "-"],
};

// Get a random number from an array
const getRandomIndex = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// Generate a random equation and answer (for my son's level)
const generateRandomEquation = (level = 0) => {
  const firstNumber = getRandomIndex(Object.values(availableNumbers)[level]);
  const secondNumber = getRandomIndex(Object.values(availableNumbers)[level]);
  const operator = getRandomIndex(Object.values(availableOperators)[level]);

  const equation = {
    firstNumber,
    secondNumber,
    operator,
  };
  let answer;

  switch (operator) {
    case "+":
      answer = firstNumber + secondNumber;
      break;
    case "-":
      answer = firstNumber - secondNumber;
      break;
  }

  return { equation, answer };
};

// Get a random equation and answer with no negative answers (for my son's level)
// technically if there are no restrictions, this function is not needed
// you could just call generateRandomEquation() directly
const getRandomEquation = () => {
  let generateEquation = generateRandomEquation();

  // if the answer is negative, generate a new equation
  while (generateEquation.answer < 0) {
    generateEquation = generateRandomEquation();
  }

  return {
    equation: generateEquation.equation,
    answer: generateEquation.answer,
  };
};

export { getRandomEquation };
