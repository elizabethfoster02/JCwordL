import { BaseModal } from './BaseModal'
import { isLatin } from '../../constants/latinSet'

type Props = {
  isOpen: boolean
  handleClose: () => void
  solution: string
}

export const EasyModal = ({ isOpen, handleClose, solution }: Props) => {
  return (
    <BaseModal title="Easy Mode" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-md text-gray-500 dark:text-gray-300">
        Today's answer is in
      </p>
      {isLatin(solution) === true ? (
        <p className="text-md text-gray-500 dark:text-gray-300">Latin</p>
      ) : (
        <p className="text-md text-gray-500 dark:text-gray-300">English</p>
      )}
    </BaseModal>
  )
}
