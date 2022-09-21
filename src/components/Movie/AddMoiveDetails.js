import React, { useRef } from "react";
import classes from "../Review/addRevie.module.css";

import { db } from '../../firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { useNavigate } from "react-router-dom";

const AddMoiveDetails = (props) => {
  const navigate = useNavigate();
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const bannerImgUrlRef = useRef("");
  const coverImgUrlRef = useRef("");

  const tailerUrlRef = useRef("");
  const directorRef = useRef("");
  const writersRef = useRef("");
  const starsRef = useRef("");

  async function submitHandler(event) {
    event.preventDefault();
    try {


      await addDoc(collection(db, "movies"), {
        name: nameRef.current.value,
        coverImgUrl: coverImgUrlRef.current.value,
        bannerImgUrl: bannerImgUrlRef.current.value,
        tailerUrl: tailerUrlRef.current.value,
        description: descriptionRef.current.value,
        director: directorRef.current.value,
        writer: writersRef.current.value,
        stars: starsRef.current.value,
        reviews: [],
      });

      navigate("/");

    } catch (error) {
      console.log('error from add movie details submit handler /n', error)
    }

  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef} />
      </div>

      <div className={classes.control}>
        <label htmlFor="cover-url">cover-url</label>
        <input type="text" id="cover-url" ref={coverImgUrlRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="banner_url">banner_url</label>
        <input type="text" id="banner_url" ref={bannerImgUrlRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="tailer-url">tailer-url</label>
        <input type="text" id="tailer-url" ref={tailerUrlRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="director">director</label>
        <input type="text" id="director" ref={directorRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="writers">writers</label>
        <input type="text" id="writers" ref={writersRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="stars">stars</label>
        <input type="text" id="stars" ref={starsRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">description</label>
        <textarea rows="5" id="description" ref={descriptionRef}></textarea>
      </div>
      <button>Add movie</button>
    </form>
  );
};

export default AddMoiveDetails;
