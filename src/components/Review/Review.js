/* eslint-disable */;
import classes from "./review.module.css";
import { BsFillStarFill } from "react-icons/bs";

const Review = (props) => {

  const getStarts = (numberOfStars) => {
    let stars = [];
    for (let i = 0; i < numberOfStars; i++) {

      stars.push(<BsFillStarFill />
      )

    }
    return stars;
  }


  const htmlForStar = getStarts(props.rating)




  return (
    <div className={classes.review}>

      {htmlForStar}
      <p>

        {props.rating}\10
      </p>

      <h3>{props.title}</h3>
      <div className="name-date">
        <p>{props.name}</p>
        <p>{props.date}</p>
      </div>
      <p>{props.description}</p>
    </div>
  );
};

export default Review;
