import React from 'react'
import { FaClock } from "react-icons/fa";

const post = () => {
	return <div className="card">

		<h5 className="card-title text text-dark">THE RETURN OF TANYA TUCKER: FEATURING BRANDI CARLILE</h5>

		<FaClock />
		<p className="card-text">
			<small className="text-muted">10/10/10</small>
		</p>
		<img src="https://i0.wp.com/leonardmaltin.com/wp-content/uploads/2022/10/20tanya-tucker-review-videoSixteenByNineJumbo1600.jpg?resize=664%2C374&ssl=1" className="card-img-top" alt="..." width={"664px"} height={"374px"} />
		<div className="card-body text-center">

			<p className="card-text text-dark">
				lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>

			<button type="button" class="btn btn-outline-primary">Read more</button>
		</div>
	</div>

}

export default post