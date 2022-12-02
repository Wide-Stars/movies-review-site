import { React, useEffect, useState } from "react";
import {
	collection,
	query,
	orderBy,
	onSnapshot,
	collectionGroup,
} from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";

const sideBar = () => {

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




	return (<div className="mt-5 ">
		<h3 className="text-left">Top Movies</h3>
		<ul class="list-group list-group-flush text-white mt-5">

			{
				moviesList.map((movie, i) => {
					if (i < 5) {
						return (
							<li style={

								{
									fontSize: "1.2rem"
								}

								//color of li


							} class={`list-group-item ${i % 2 == 0 ? "bg-secondary" : "bg-dark"} text-white`}>
								<Link to={`/movie/${movie.id}`} className="text-decoration-none 
							text-light">
									{i + 1 + ".          "}	{movie.name}
								</Link>
							</li>
						)
					}
				})
			}



		</ul>










		{/* <div className="card mt-5 " style={{ width: "18rem" }}>

			<div className="card-body  ">
				<ul class="list-group list-group-flush ">
					<li class="list-group-item ">Cras justo odio</li>
					<li class="list-group-item">Dapibus ac facilisis in</li>
					<li class="list-group-item">Morbi leo risus</li>
					<li class="list-group-item">Porta ac consectetur ac</li>
					<li class="list-group-item">Vestibulum at eros</li>
				</ul>

			</div>
		</div> */}


	</div>
	)
}

export default sideBar