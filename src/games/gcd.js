const getRandomInt = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Алгоритм Евклида для нахождения НОД
const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

export const generateGcdQuestion = () => {
  const a = getRandomInt()
  const b = getRandomInt()

  // Чтобы числа не были слишком простыми, иногда делаем одно кратным другому
  if (Math.random() > 0.5) {
    const multiplier = getRandomInt(2, 5)
    return `${a} ${a * multiplier}`
  }

  return `${a} ${b}`
}

export const getGcdCorrectAnswer = (question) => {
  const [strA, strB] = question.split(' ')
  const a = Number(strA)
  const b = Number(strB)

  return gcd(a, b).toString()
}
