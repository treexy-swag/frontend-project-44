const operations = ['+', '-', '*'];

const getRandomNumber = (min = 1, max = 20) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

export const generateCalcQuestion = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operation = operations[Math.floor(Math.random() * operations.length)];

  const question = `${num1} ${operation} ${num2}`;
  return question;
};

export const getCalcCorrectAnswer = (question) => {
  // question выглядит как "25 * 7"
  const [num1, op, num2] = question.split(' ');
  const a = Number(num1);
  const b = Number(num2);

  switch (op) {
    case '+': return (a + b).toString();
    case '-': return (a - b).toString();
    case '*': return (a * b).toString();
    default: return '0';
  }
};