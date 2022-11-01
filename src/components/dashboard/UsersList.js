
/* eslint-disable */;
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
	collection,
	query,
	orderBy,
	onSnapshot,
	doc,
	updateDoc,
	deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import TopHeader from "../TopHeader/TopHeader";
// import { async } from "@firebase/util";
import AdminLayout from "../layouts/AdminLayout";

const Dashboard = () => {
	const [userList, setUserList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	// const getUsers = async () => {
	// 	const q = query(collection(db, "users"));
	// 	const data = onSnapshot(q, (querySnapshot) => {

	// 		querySnapshot.docs.map((doc) => {
	// 			return { ...doc.data() };
	// 		})
	// 	}
	// 	);

	// 	setUserList(data);



	// 	setIsLoading(false);
	// }

	useEffect(() => {
		setIsLoading(true);
		const q = query(collection(db, "users"));
		onSnapshot(q, (querySnapshot) => {
			setUserList(
				querySnapshot.docs.map((doc) => {
					return { ...doc.data() };
				})
			);
			setIsLoading(false);
		});
	}, []);

	//data fetching from firebase




	const usersListA = userList.map((movie, i) => {
		return (
			<tr key={i}>
				<td>
					{i + 1}
				</td>
				<td>
					{movie.name}
				</td>
				<td>
					{movie.email}
				</td>
			</tr>
		);
	});
	return (
		<AdminLayout>
			{!isLoading && userList.length === 0 && (
				<h2 className="text-warning text-center">oops! no Users were found</h2>
			)}
			{!isLoading && userList.length > 0 && (
				<table className="table  table-bordered">
					<thead>
						<tr>
							<th>No.</th>
							<th>Name</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>{usersListA}</tbody>
				</table>
			)}
			{isLoading && <h1 className="text-warning text-center">Loading.....</h1>}
		</AdminLayout>
	);
};

export default Dashboard;
