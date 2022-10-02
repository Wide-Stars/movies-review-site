
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
import { async } from "@firebase/util";
import AdminLayout from "../layouts/AdminLayout";

const Dashboard = () => {
	const [userList, setUserList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		unsubscribe();
	}, []);

	//data fetching from firebase
	const q = query(collection(db, "users"));
	const unsubscribe = onSnapshot(q, (querySnapshot) => {
		setUserList(
			querySnapshot.docs.map((doc) => {
				return { ...doc.data() };
			})
		);
		setIsLoading(false);
		console.log(userList);
	});

	const handleDelete = async (id) => {
		const docRef = doc(db, "movies", id);
		try {
			await deleteDoc(docRef);
			userList.splice(
				userList.findIndex((movie) => movie.id === id),
				1
			);
		} catch (err) {
			console.log(err);
		}
	};

	const usersListA = userList.map((movie, i) => {
		return (
			<tr>
				<td>

					{i + 1}

				</td>
				<td>
					{movie.name}
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
