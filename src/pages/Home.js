import BannerSlider from "../components/slider/BannerSlider";
import LatestMovie from "../components/slider/LatestMovie";
import TopHeader from "../components/TopHeader/TopHeader";

const Home = () => {
  return (
    <div className="container-home pb-5 ">
      <TopHeader />
      <BannerSlider />
      <LatestMovie />
    </div>
  );
};

export default Home;
