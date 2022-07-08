import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Guess the word in 6 tries. Possible wordle answers include all English
        words and all Latin words (and inflections). All answers have some
        connection to the National Junior Classical League's annual convention.
        After each guess, the color of the tiles will change to show how close
        your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="A" status="correct" />
        <Cell value="U" />
        <Cell value="D" />
        <Cell value="I" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500">
        The letter A is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" />
        <Cell value="I" />
        <Cell value="S" />
        <Cell value="C" status="present" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500">
        The letter C is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="S" />
        <Cell value="C" status="absent" />
        <Cell value="L" />
        <Cell value="E" />
        <Cell value="R" />
      </div>
      <p className="text-sm text-gray-500">
        The letter C is not in the word in any spot.
      </p>
    </BaseModal>
  )
}
