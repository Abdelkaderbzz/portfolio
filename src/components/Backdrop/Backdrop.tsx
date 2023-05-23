import { useSelector, useDispatch } from "react-redux";

import useWindowSize from "../../hooks/useWindowSize";
import {
  closeSidebar,
  openNavigation,
  openSidebar,
  settingsState,
  toggleSidebar,
} from "../../store/settings/settingsSlice";
import { RootState } from "../../store/index";

const Backdrop = () => {
  const { isSidebarOpened } = useSelector<RootState, settingsState>(
    (state) => state.settings
  );
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  if (isSidebarOpened || width >= 1290) return null;

  return (
    <div
      className="backdrop"
      onClick={() => {
        dispatch(openSidebar());
        dispatch(openNavigation());
      }}
    ></div>
  );
};

export default Backdrop;
