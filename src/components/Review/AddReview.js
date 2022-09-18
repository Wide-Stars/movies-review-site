import React, { useRef } from "react";
import classes from "./addRevie.module.css";

const AddReview = (props) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();


    const review = {
      name: nameRef.current.value,
      openingText: descriptionRef.current.value,
    };

    console.log(review);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">description</label>
        <textarea rows="5" id="description" ref={descriptionRef}></textarea>
      </div>
      <button>Add Review</button>
    </form>
  );
};

export default AddReview;
