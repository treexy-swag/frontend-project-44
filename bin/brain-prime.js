#!/usr/bin/env node

// brain-prime

import { greetUser } from '../src/cli.js';
import { playGame } from '../src/engine.js';
import { generatePrimeQuestion, isPrime } from '../src/games/prime.js';

const name = greetUser();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');

playGame({
  name,
  generateQuestion: generatePrimeQuestion,
  getCorrectAnswer: (question) => isPrime(Number(question)) ? 'yes' : 'no',
});