import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/index";
import {
  settingsState,
  toggleNavigation,
} from "../../store/settings/settingsSlice";
import useWindowSize from "../../hooks/useWindowSize";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { TfiArrowCircleRight } from "react-icons/tfi";

const DotsTrigger = () => {
  const { isNavigationbarOpened } = useSelector<RootState, settingsState>(
    (state) => state.settings
  );
  const { width } = useWindowSize();
  const dispatch = useDispatch();

  if (width >= 1290) return null;
  return (
    <div
      data-testid='dot-button'
      className='dots_button'
      onClick={() => dispatch(toggleNavigation())}
    >
      {isNavigationbarOpened ? (
        <HiOutlineDotsVertical data-testid="svg1"  className='menu-icon' />
      ) : (
        <TfiArrowCircleRight data-testid="svg2" className='menu-icon' />
      )}
    </div>
  );
};

export default DotsTrigger;
