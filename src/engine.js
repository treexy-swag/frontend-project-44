import readlineSync from 'readline-sync';

export const playGame = ({ name, generateQuestion, getCorrectAnswer }) => {
  let correctCount = 0;
  const rounds = 3;

  while (correctCount < rounds) {
    const question = generateQuestion();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ').trim().toLowerCase();
    const correct = getCorrectAnswer(question);

    if (answer === correct) {
      console.log('Correct!');
      correctCount++;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};