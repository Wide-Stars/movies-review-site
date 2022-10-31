import BannerSlider from "../components/slider/BannerSlider";
import LatestMovie from "../components/slider/LatestMovie";
import TopHeader from "../components/TopHeader/TopHeader";
import Post from '../components/blog/post'
import SideBar from "../components/blog/sideBar";

const Home = () => {
  return (
    <div className="container-home pb-5 ">
      <TopHeader />
      <BannerSlider />
      {/* <LatestMovie /> */}
      <div className="container ">
        <div class="row">
          <div class="col-8 "><Post /></div>
          <div class="col-3 ">
            <SideBar />
          </div>
        </div>
      </div>
    </div>



  );
};

export default Home;
