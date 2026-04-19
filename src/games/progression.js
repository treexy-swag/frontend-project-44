const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const generateProgressionQuestion = () => {
  const length = getRandomInt(5, 10) // длина от 5 до 10
  const start = getRandomInt(1, 20)
  const step = getRandomInt(2, 6) // шаг от 2 до 6

  const progression = []
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }

  // Случайная позиция для скрытия числа
  const hiddenIndex = getRandomInt(0, length - 1)
  const hiddenValue = progression[hiddenIndex]

  // Заменяем скрытое число на ".."
  progression[hiddenIndex] = '..'

  // Формируем строку вопроса
  const question = progression.join(' ')

  // Сохраняем правильный ответ в замыкании (чтобы getCorrectAnswer мог его получить)
  return { question, answer: hiddenValue.toString() }
}

export const getProgressionCorrectAnswer = (questionData) => {
  // questionData — это объект { question, answer }
  return questionData.answer
}
