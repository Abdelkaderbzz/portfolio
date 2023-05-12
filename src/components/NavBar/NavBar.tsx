import Navigation from '../Navigation/Navigation'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/index'
import settingsSlice from '../../store/settings/settingsSlice'
import { settingsState } from '../../store/settings/settingsSlice'
import useWindowSize from '../../hooks/useWindowSize'

const NavBar = () => {
  const { isNavigationbarOpened } = useSelector<RootState, settingsState>(
    (state) => state.settings
  )
  const { width } = useWindowSize()
  return (
    <div
      className={
        isNavigationbarOpened && width < 1290
          ? 'navigation is_open'
          : 'navigation'
      }
    >
      <Navigation />
    </div>
  )
}

export default NavBar
