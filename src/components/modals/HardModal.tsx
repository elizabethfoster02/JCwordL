import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
  handleModeChange: () => void
}

export const HardModal = ({ isOpen, handleClose, handleModeChange }: Props) => {
  return (
    <BaseModal
      title="set difficulty mode"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-xs text-gray-500 dark:text-gray-300">
        The JCwordL has two different modes of difficulty. There are a lot of
        answers when both English and Latin words can be guessed. Easy Mode
        allows players to see what language the answer is in. Difficult Mode
        requires players to consider words in both English and Latin.
      </p>

      <h4 className="text-md leading-6 font-medium text-gray-900 dark:text-white mt-6">
        {' '}
        default mode
      </h4>
      <p className="text-xs text-gray-500 dark:text-gray-300">
        All players begin in hard mode and can change to Easy Mode to see the
        language of the answer. However, once you change to Easy Mode, you
        cannot change back.
      </p>

      <h4 className="text-md leading-6 font-medium text-gray-900 dark:text-white mt-6">
        {' '}
      </h4>
      <button
        type="button"
        className="items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-purple-700 bg-purple-100 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 select-none"
        onClick={() => handleModeChange()}
      >
        switch to easy mode
      </button>
    </BaseModal>
  )
}
