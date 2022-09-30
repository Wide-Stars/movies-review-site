import React, { useRef } from "react";
import classes from "../Review/addRevie.module.css";

import { db } from '../../firebase'
import { collection, addDoc, } from 'firebase/firestore'

const AddMoiveDetails = () => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const bannerImgUrlRef = useRef("");
  const coverImgUrlRef = useRef("");

  const tailerUrlRef = useRef("");
  const directorRef = useRef("");
  const writersRef = useRef("");
  const starsRef = useRef("");
  const [banner, setBanner] = React.useState(false);


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

      nameRef.current.value = "";
      descriptionRef.current.value = "";
      bannerImgUrlRef.current.value = "";
      coverImgUrlRef.current.value = "";
      tailerUrlRef.current.value = "";
      directorRef.current.value = "";
      writersRef.current.value = "";
      starsRef.current.value = "";
      setBanner(true)



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
        <label htmlFor="mainImageUrl">Main Image Url</label>
        <input type="text" id="mainImageUrl" ref={coverImgUrlRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="coverImageUrl">Cover Image Url</label>
        <input type="text" id="coverImageUrl" ref={bannerImgUrlRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="tailer-url">Tailer url</label>
        <input type="text" id="tailer-url" ref={tailerUrlRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="director">Director</label>
        <input type="text" id="director" ref={directorRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="writers">Writers</label>
        <input type="text" id="writers" ref={writersRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="stars">Stars</label>
        <input type="text" id="stars" ref={starsRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea rows="5" id="description" ref={descriptionRef}></textarea>
      </div>
      {banner && <p>Movie added successfully</p>}
      <button className="btn btn-primary">Add movie</button>

    </form>
  );
};

export default AddMoiveDetails;
