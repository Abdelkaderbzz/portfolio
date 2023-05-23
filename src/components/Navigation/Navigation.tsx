import { NavLink, Route } from "react-router-dom";
import { RiHome2Fill } from "react-icons/ri";
import { FaFileCode } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { RiQuillPenFill } from "react-icons/ri";
import { BsMask } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FaCommentAlt } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import useAuth from "../../store/auth/authSlice";
import { ReactNode, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { removeTokensFromLocalStorage } from "../../helpers/logalStorage";


interface NavigationProps {
  icon: string | ReactNode;
  route: string;
  children: React.ReactNode;
}
const NavigationLink = ({
  icon = null,
  route = "/",
  children,
}: NavigationProps) => {
  const [hover, setHover] = useState<boolean>(false);
  const handlehover = () => {
    setHover(!hover);
  };
  return (
    <>
      <NavLink
        to={route}
        className="navigation_link"
        onClick={() => {
          if (children === "logout") removeTokensFromLocalStorage();
        }}
      >
        <div className={hover ? "hover--icon" : "hover--icon none"}>
          <div className="rectangel">
            <span>{children}</span>
          </div>
          <BsFillCaretDownFill />
        </div>
        <div
          className="navigation_link__content"
          //@ts-ignore
          onMouseEnter={() => handlehover()}
          onMouseLeave={() => handlehover()}
        >
          {icon}
        </div>
      </NavLink>
    </>
  );
};

const Navigation = () => {
  const [theme, setTheme] = useState("light");

  if (theme === "dark") {
    document.querySelector("body")?.classList.add("dark");
  } else {
    document.querySelector("body")?.classList.remove("dark");
  }
  const { width } = useWindowSize();
  return (
    <div className="all-navigation-button">
      {width < 1290 || (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <BsMask />
        </div>
      )}
      <div className="navigation__container">
        <NavigationLink
          route="/"
          icon={<RiHome2Fill className="link_logo" />}
          children={"home"}
        ></NavigationLink>
        <NavigationLink
          route="/service"
          icon={<FaFileCode className="link_logo" />}
          children={"service"}
        ></NavigationLink>
        <NavigationLink
          route="/history"
          icon={<FaUserGraduate className="link_logo" />}
          children={"history"}
        ></NavigationLink>
        <NavigationLink
          route="/portfolio"
          icon={<MdOutlineWork className="link_logo" />}
          children={"portfolio"}
        ></NavigationLink>
        <NavigationLink
          route="/blog"
          icon={<RiQuillPenFill className="link_logo" />}
          children={"blog"}
        ></NavigationLink>
        <NavigationLink
          route="/contact"
          icon={<FaCommentAlt className="link_logo" />}
          children={"contact"}
        ></NavigationLink>
        <NavigationLink
          route="/auth/login"
          icon={<FiLogOut className="link_logo" />}
          children={"logout"}
        ></NavigationLink>
      </div>
    </div>
  );
};

export default Navigation;
