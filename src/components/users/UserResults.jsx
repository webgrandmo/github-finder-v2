import { useEffect, useState } from 'react';

function UserResults() {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
			headers: {
				Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
			},
		});
		const data = await response.json();
		console.log(data);

		setUsers(data);
	};
	return (
		<div>
			User Results
			{users.map((user) => {
				return <p>{user.login}</p>;
			})}
		</div>
	);
}

export default UserResults;
