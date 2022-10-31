import { React, useEffect, useState } from 'react'
import { FaClock, FaEye } from "react-icons/fa";
import { collection, query, orderBy, onSnapshot, collectionGroup } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";



const Post = () => {
	const [moviesList, setMoviesList] = useState([]);

	const q = query(collection(db, "movies"));

	useEffect(() => {
		onSnapshot(q, (querySnapshot) => {
			setMoviesList(
				querySnapshot.docs.map((doc) => {
					return { id: doc.id, ...doc.data() };
				})
			);

		});
	}, []);

	//data fetching



	console.log(moviesList);







	return <div className='mt-5'>
		{moviesList.map((movie) => {
			return (
				<div className="card mb-3" key={movie.id}>

					<h5 className="card-title text text-dark text-center">{movie.name}</h5>

					<div className='row'>

					</div>

					<div className='row'>
						<div className='row text-left col'>
							<FaClock className="col" style={{ color: "gray", fontSize: "1em", }} />
							<p className="card-text col">
								<small className="text-muted">10/10/10</small>
							</p>

						</div>
						<div className='row text-left col'>
							<FaEye className="col" style={{ color: "gray", fontSize: "1em" }} />
							<p className="card-text col">
								<small className="text-muted">{movie.view ? movie.view : "0"}</small>
							</p>

						</div>

					</div>

					<img src={movie.coverImgUrl} className="card-img-top" alt="..." width={"664px"} height={"374px"} />
					<div className="card-body text-center">

						<p className="card-text text-dark">
							{movie.description}
						</p>

						<Link
							to={'/movie/' + movie.id}>
							<button type="button" class="btn btn-outline-primary">Read more</button>
						</Link>
					</div>
				</div>
			)
		})}
	</div>
	// 	return <div className="card">

	// 		<h5 className="card-title text text-dark">THE RETURN OF TANYA TUCKER:FEATURING BRANDI CARLILE</h5>

	// 		<div className='row'>

	// 		</div>

	// 		<div className='row'>
	// 			<div className='row text-left col'>
	// 				<FaClock className="col" style={{ color: "gray", fontSize: "1em", }} />
	// 				<p className="card-text col">
	// 					<small className="text-muted">10/10/10</small>
	// 				</p>

	// 			</div>
	// 			<div className='row text-left col'>
	// 				<FaEye className="col" style={{ color: "gray", fontSize: "1em" }} />
	// 				<p className="card-text col">
	// 					<small className="text-muted">10</small>
	// 				</p>

	// 			</div>

	// 		</div>

	// 		<img src="https://i0.wp.com/leonardmaltin.com/wp-content/uploads/2022/10/20tanya-tucker-review-videoSixteenByNineJumbo1600.jpg?resize=664%2C374&ssl=1" className="card-img-top" alt="..." width={"664px"} height={"374px"} />
	// 		<div className="card-body text-center">

	// 			<p className="card-text text-dark">
	// 				lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	// 			</p>

	// 			<button type="button" class="btn btn-outline-primary">Read more</button>
	// 		</div>
	// 	</div>

	// }
}

export default Post