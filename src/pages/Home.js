import BannerSlider from "../components/slider/BannerSlider";
import LatestMovie from "../components/slider/LatestMovie";
import TopHeader from "../components/TopHeader/TopHeader";
import Post from '../components/blog/post'


const Home = () => {
  return (
    <div className="container pb-5 ">
      <TopHeader />
      <BannerSlider />
      {/* <LatestMovie /> */}
      <div className="container ">
        <div className="row d-flex justify-content-center ">


          <div className="col-9 "><Post /></div>

        </div>
      </div>
    </div>



  );
};

export default Home;
