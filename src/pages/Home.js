import BannerSlider from "../components/slider/BannerSlider";
import LatestMovie from "../components/slider/LatestMovie";
import TopHeader from "../components/TopHeader/TopHeader";
import Post from '../components/blog/post'
import SideBar from '../components/blog/sideBar'


const Home = () => {
  return (
    <div className="container pb-5 ">
      <TopHeader />
      <BannerSlider />
      {/* <LatestMovie /> */}
      <div className="container ">
        <div className="row d-flex justify-content-space-between ">


          <div className="col-8 "><Post /></div>
          <div className="col-3 "> <SideBar /> </div>

        </div>
      </div>
    </div>



  );
};

export default Home;
