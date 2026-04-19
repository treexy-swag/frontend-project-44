const getRandomInt = (min = 2, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const isPrime = (num) => {
  if (num < 2) return false

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

export const generatePrimeQuestion = () => {
  const number = getRandomInt()
  return number.toString()
}
