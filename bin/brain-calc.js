#!/usr/bin/env node

// brain-calc

import { greetUser } from '../src/cli.js'
import { playGame } from '../src/engine.js'
import { generateCalcQuestion, getCalcCorrectAnswer } from '../src/games/calc.js'

const name = greetUser()

console.log('What is the result of the expression?\n')

playGame({
  name,
  generateQuestion: generateCalcQuestion,
  getCorrectAnswer: getCalcCorrectAnswer,
})
