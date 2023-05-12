import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/index'
import {
  settingsState,
  toggleNavigation,
} from '../../store/settings/settingsSlice'
import { width } from '@mui/system'
import useWindowSize from '../../hooks/useWindowSize'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { GrClose } from 'react-icons/gr'
import { TfiArrowCircleRight } from 'react-icons/tfi';

const DotsTrigger = () => {
  const { isNavigationbarOpened } = useSelector<RootState, settingsState>(
    (state) => state.settings
  )
  const { width } = useWindowSize()
  const dispatch = useDispatch()

  if (width >= 1290) return null
  return (
    <div className='dots_button' onClick={() => dispatch(toggleNavigation())}>
      {isNavigationbarOpened ? (
        <HiOutlineDotsVertical className='menu-icon' />
      ) : (
        <TfiArrowCircleRight className='menu-icon' />
      )}
    </div>
  )
}

export default DotsTrigger
