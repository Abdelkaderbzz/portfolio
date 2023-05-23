import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import LeftBar from "../../components/LeftBar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import useWindowSize from "../../hooks/useWindowSize";
import { RootState } from "../../store/index";
import { settingsState } from "../../store/settings/settingsSlice";
import { useSelector } from "react-redux";
import Backdrop from "../../components/Backdrop/Backdrop";

const MainLayout = () => {
  const { width } = useWindowSize();
  const { isNavigationbarOpened, isSidebarOpened } = useSelector<
    RootState,
    settingsState
  >((state) => state.settings);
  return (
    <>
      <div className="main-layout">
        {width < 1290 && <Header />}
        <div className="psedo-layout">
          <LeftBar />
          <div className="main-content">
            <Outlet />
            <Footer />
          </div>
          <NavBar />
        </div>
        <Backdrop />
      </div>
    </>
  );
};

export default MainLayout;
