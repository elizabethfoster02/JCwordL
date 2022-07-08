import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'

export const shareStatus = (
  guesses: string[],
  lost: boolean,
  isGameHard: boolean
) => {
  // eslint-disable-next-line no-lone-blocks
  {
    isGameHard
      ? navigator.clipboard.writeText(
          `JCL Wordle: Hard Mode ${solutionIndex - 187} ${
            lost ? 'X' : guesses.length
          }/6\n\n` + generateEmojiGrid(guesses)
        )
      : navigator.clipboard.writeText(
          `JCL Wordle: Easy Mode ${solutionIndex - 187} ${
            lost ? 'X' : guesses.length
          }/6\n\n` + generateEmojiGrid(guesses)
        )
  }
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟪'
            case 'present':
              return '🟨'
            default:
              return '⬜'
          }
        })
        .join('')
    })
    .join('\n')
}
