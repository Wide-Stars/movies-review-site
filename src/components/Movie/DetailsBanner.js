/* eslint-disable */;
import Card from "../UI/Card";
import ReactPlayer from "react-player";

const DetailsBanner = (props) => {
  console.log(props)
  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <ReactPlayer height="420px" width="100%" url={props.src} />
          <p className="mt-4 movie_desc">{props.description}</p>
        </div>
        <Card className="col-md-4">
          <h5>
            Movie Name: <span className="dtls_name">{props.movieName}</span>
          </h5>
          <h5>
            Director: <span className="dtls_name">{props.director}</span>
          </h5>
          <h5>
            Writers: <span className="dtls_name">{props.writers}</span>
          </h5>
          <h5>
            Stars: <span className="dtls_name">{props.stars}</span>
          </h5>
          <h5>
            Total views: <span className="dtls_name">{props.view}</span>
          </h5>
        </Card>
      </div>
    </div>
  );
};

export default DetailsBanner;
