import readlineSync from 'readline-sync';

export const playGame = ({ name, generateQuestion, getCorrectAnswer }) => {
  let correctCount = 0;
  const rounds = 3;

  while (correctCount < rounds) {
    const questionData = generateQuestion();
    
    
    const question = typeof questionData === 'string' 
      ? questionData 
      : questionData.question;

    const correct = typeof questionData === 'string'
      ? getCorrectAnswer(question)
      : questionData.answer;   

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ').trim();

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