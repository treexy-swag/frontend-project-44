#!/usr/bin/env node

// brain-gcd

import { greetUser } from '../src/cli.js';
import { playGame } from '../src/engine.js';
import { generateGcdQuestion, getGcdCorrectAnswer } from '../src/games/gcd.js';

const name = greetUser();

console.log('Find the greatest common divisor of given numbers.\n');

playGame({
  name,
  generateQuestion: generateGcdQuestion,
  getCorrectAnswer: getGcdCorrectAnswer,
});