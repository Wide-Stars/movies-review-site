import React from 'react'

const sideBar = () => {
	return (<div>
		<div className="card mt-5" style={{ width: "18rem" }}>

			<div className="card-body  ">
				<label class="form-label text-dark pl-5">Search for movie:</label>
				<input className='form-control' />
				<div className='text-center'>
					<h5 className="card-title">Card title</h5>

					<a href="#" className="btn btn-primary ">

						Search
					</a>

				</div>

			</div>
		</div>


	</div>
	)
}

export default sideBar