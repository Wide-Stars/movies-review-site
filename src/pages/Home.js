import BannerSlider from '../components/slider/BannerSlider';
import LatestMovie from '../components/slider/LatestMovie';

const Home = () => {
    return (
        <div className="container pb-5">
           <BannerSlider />
           <LatestMovie />
        </div>
    );
}

export default Home;
