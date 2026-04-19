#!/usr/bin/env node

// brain-progression

import { greetUser } from '../src/cli.js';
import { playGame } from '../src/engine.js';
import { generateProgressionQuestion, getProgressionCorrectAnswer } from '../src/games/progression.js';

const name = greetUser();

console.log('What number is missing in the progression?\n');

playGame({
  name,
  generateQuestion: generateProgressionQuestion,
  getCorrectAnswer: getProgressionCorrectAnswer,
});