import SideBarPhoto from "./../../assets/images/sidebar-photo.png";
import OneInfo from "../OneInfo/OneInfo";
import ProgressBar from "../ProgressBar/ProgressBar";
import ExtraSkills from "../ExtraSkills/ExtraSkills";
import { BsDownload } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import useWindowSize from "../../hooks/useWindowSize";
import {
  settingsState,
} from "../../store/settings/settingsSlice";
import { NavLink } from "react-router-dom";
import LinkedinIcon from "./../../assets/images/icons8-linkedin-3d-fluency-32.png";
import FacebookIcon from "./../../assets/images/icons8-facebook-circled-32.png";
import GithubIcon from "./../../assets/images/icons8-github-32.png";
import InstagramIcon from "./../../assets/images/icons8-instagram-32.png";
import TelegramIcon from "./../../assets/images/icons8-telegram-32.png";

const listOfInfo = {
  Age: 19,
  Residence: "BD",
  freelance: "Available",
  Address: "Sousse, Tunisia",
};
const languages = {
  Arabic: "100%",
  English: "75%",
  french: "60%",
  spanich: "45%",
};
const Skills = {
  HTML: "100%",
  CSS: "80%",
  Js: "80%",
  Ts: "78%",
  Reactjs: "80%",
  Nodejs: "85%",
};

const LeftBar = () => {
  const { isSidebarOpened } = useSelector<RootState, settingsState>(
    (state) => state.settings
  );
  const { width } = useWindowSize();

  return (
    <div
      className={
        isSidebarOpened === true && width < 1290 ? "sidebar open" : "sidebar"
      }
    >
      <div className="left-bar">
        <div className="person-photo-container">
          <img src={SideBarPhoto} alt="" />
          <h1>Abdelkader Bouzomita</h1>

          <h4>Full-stack Developer</h4>
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <NavLink
              target="_blank"
              to={"https://www.linkedin.com/in/bouzomita-abdelkader-928953234/"}
            >
              <img src={LinkedinIcon} alt="not-found" />
            </NavLink>
            <NavLink
              target="_blank"
              to={"https://gitlab.com/AbdelkaderBouzomita"}
            >
              <img src={GithubIcon} alt="not-found" />
            </NavLink>
            <NavLink target="_blank" to={"https://www.linkedin.com/feed/"}>
              <img src={TelegramIcon} alt="not-found" />
            </NavLink>
            <NavLink target="_blank" to={"https://www.facebook.com/feed/"}>
              <img src={FacebookIcon} alt="not-found" />
            </NavLink>
            <NavLink target="_blank" to={"https://www.Instagram.com/feed/"}>
              <img src={InstagramIcon} alt="not-found" />
            </NavLink>
          </div>
        </div>
        <div className="person-description">
          {Object.entries(listOfInfo).map(([key, value], index) => {
            return <OneInfo key={index} infoName={key} infoValue={value} />;
          })}
        </div>
        <div className="languages-skills">
          <div className="languages">
            <h2>Languages</h2>

            {Object.entries(languages).map(([key, value], index) => {
              return <ProgressBar key={index} value={key} percentage={value} />;
            })}
          </div>
          <div className="skills">
            <h2>Skills</h2>
            {Object.entries(Skills).map(([key, value], index) => {
              return <ProgressBar key={index} value={key} percentage={value} />;
            })}
          </div>
        </div>
        <ExtraSkills />

        <a href="CV.pdf" download={"CV.pdf"} className="btn-install">
          <BsDownload />
          <p>DOWNLOAD CV</p>
        </a>
      </div>
    </div>
  );
};

export default LeftBar;
