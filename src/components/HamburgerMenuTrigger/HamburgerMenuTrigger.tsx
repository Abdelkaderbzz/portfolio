import useWindowSize from '../../hooks/useWindowSize'
import { useDispatch, useSelector } from 'react-redux'
import {
  toggleSidebar,
  settingsState,
} from '../../store/settings/settingsSlice'
import { AiOutlineMenu } from 'react-icons/ai'
import { RootState } from '../../store/index'
import { GrClose } from 'react-icons/gr'
import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi'

const HamburgerMenuTrigger = () => {
  const { isSidebarOpened } = useSelector<RootState, settingsState>(
    (state) => state.settings
  )
  const { width } = useWindowSize()
  const dispatch = useDispatch()

  if (width >= 1290) return null

  return (
    <div
      className='hamburger__button'
      onClick={() => dispatch(toggleSidebar())}
    >
      {isSidebarOpened ? (
        <AiOutlineMenu className='menu-icon' />
      ) : (
        <TfiArrowCircleLeft className='menu-icon' />
      )}
    </div>
  )
}

export default HamburgerMenuTrigger
