import React, { useRef, useState } from "react";
import { db } from "../../firebase"
import classes from "./addRevie.module.css";
import { doc, updateDoc } from "firebase/firestore";


const AddReview = (props) => {

  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const ratingRef = useRef(1);
  const [reviewError, seReviewError] = useState(false)

  const docRef = doc(db, "movies", props.id);

  const addReview = async (ref) => {


    await updateDoc(ref, {
      review: JSON.stringify([...props.reviews, { rating: ratingRef.current.value, name: nameRef.current.value, date: new Date().toLocaleDateString(), comment: descriptionRef.current.value }])
    });

  }

  function submitHandler(event) {
    event.preventDefault();

    if (nameRef.current.value === "" || descriptionRef.current.value === "") {
      seReviewError(true)
      return
    }

    addReview(docRef)
    // navigate("/movie/" + props.id);
    props.reRenderHandler()
    ratingRef.current.value = 1;
    nameRef.current.value = "";
    descriptionRef.current.value = "";



  }

  return (
    <form onSubmit={submitHandler} >
      <div className={classes.control}>
        <label htmlFor="rating">rating</label>
        <input type="number" defaultValue={1} min={1} max={10} id="rating" ref={ratingRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">description</label>
        <textarea rows="5" id="description" ref={descriptionRef}></textarea>
      </div>
      <button className="btn btn-primary">Add Review</button>
      {reviewError && <p className="text-danger">Please fill all the fields</p>}
    </form>

  );
};

export default AddReview;
