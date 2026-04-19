#!/usr/bin/env node

// brain-even

import { greetUser } from '../src/cli.js';
import { playGame } from '../src/engine.js';
import { isEven } from '../src/games/even.js';

const name = greetUser();

console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

playGame({
  name,
  generateQuestion: () => {
    const number = Math.floor(Math.random() * 100) + 1;
    return number.toString();
  },
  getCorrectAnswer: (question) => isEven(Number(question)) ? 'yes' : 'no',
});