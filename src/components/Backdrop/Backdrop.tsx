import { useSelector, useDispatch } from "react-redux";

import useWindowSize from "../../hooks/useWindowSize";
import {
  closeNavigation,
  closeSidebar,
  settingsState,
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
        dispatch(closeSidebar());
        dispatch(closeNavigation());
      }}
    ></div>
  );
};

export default Backdrop;
