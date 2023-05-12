import { BsArrowLeft } from 'react-icons/bs'

interface ButtonPrimaryProps {
  onClick: () => void
  value: string
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ value, onClick }) => {
  return (
    <button className='button--primary' onClick={onClick}>
      <BsArrowLeft />
      <span>{value}</span>
    </button>
  )
}

export default ButtonPrimary
