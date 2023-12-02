const availableNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const availableOperators = ["+", "-"];

const getRandomNumber = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const getRandomOperator = (operators) => {
  return operators[Math.floor(Math.random() * operators.length)];
};

const getRandomEquation = () => {
  const firstNumber = getRandomNumber(availableNumbers);
  const secondNumber = getRandomNumber(availableNumbers);
  const operator = getRandomOperator(availableOperators);

  const equation = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = eval(equation);
  return { equation, answer };
};

export { getRandomEquation };
