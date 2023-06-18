import HomeHeader from "./components/HomeHeader/HomeHeader";
import Plans from "./components/Plans";
import Service from "./components/Service/Service";
import Reviews from "./components/Reviews/Reviews";
import Animation from "./components/Animation/Animation";
import useWindowSize from "../../hooks/useWindowSize";
import Counter from '../../components/Counter/Counter';


const Home = () => {
  const { width } = useWindowSize();
  
  return (
    <div className="home-page">
      <Counter />
      <div>{width < 600 || <Animation />}</div>
      {/* <HomeHeader />
      <Service />
      <Plans />
      <Reviews /> */}
    </div>
  );
};

export default Home;
