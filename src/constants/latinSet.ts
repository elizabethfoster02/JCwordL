import { VALIDGUESSES } from './validGuesses'

export function isLatin(answer: string) {
  const latinSet = new Set<string>()

  for (let i = 0; i < VALIDGUESSES.length; i++) {
    latinSet.add(VALIDGUESSES[i])
  }

  console.log(latinSet.has(answer))
  if (!latinSet.has(answer)) {
    return true
  } else {
    return false
  }
}
