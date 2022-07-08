import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an implementation of Wordle in both Latin and English themed for
        the 2022 National Junior Classical League Convention -{' '}
        <a
          href="https://wordle.latindictionary.io/"
          className="underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          play the original Latin version here
        </a>{' '}
        and{' '}
        <a
          href="https://www.nytimes.com/games/wordle/index.html"
          className="underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          play the original English version here.
        </a>
      </p>
      <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mt-6">
        Acknowledgement
      </h4>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This application is sourced from latindictionary.io's implementation of
        the Latin Wordle. The Latin wordlist came from theotarr/latin-wordle on
        Github. The English wordlist came from cwackerfuss/react-wordle on
        Github.
      </p>
      <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mt-6">
        Report a Problem
      </h4>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        If you find a problem, please contact{' '}
        <a
          href="mailto:elizaefoster@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold  underline"
        >
          us.
        </a>
      </p>
    </BaseModal>
  )
}
