import { useState, useContext } from 'react';
import GithubContext from '../context/github/GithubContext';
import AlertContext from '../context/alert/AlertContext';
import { searchUsers } from '../context/github/GithubActions';

function UserSearch() {
	const [text, setText] = useState('');
	const { users, dispatch } = useContext(GithubContext);
	const { setAlert } = useContext(AlertContext);

	const handleChange = (event) => {
		setText(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!text) {
			setAlert('Please add text', 'error');
		} else {
			dispatch({ type: 'SET_LOADING' });
			const users = await searchUsers(text);
			dispatch({ type: 'GET_USERS', payload: users });
			setText('');
		}
	};

	const handleClick = () => {
		dispatch({ type: 'CLEAN_USERS' });
	};

	return (
		<div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
			<div>
				<form onSubmit={handleSubmit}>
					<div className='form-control'>
						<div className='relative'>
							<input
								type='text'
								className='w-full pr-40 bg-gray-200 input input-lg text-black'
								placeholder='Search'
								value={text}
								onChange={handleChange}
							/>
							<button
								type='submit'
								className='absolute top-0 right-0 rounded-l-none w-36  btn btn-lg  '>
								Search
							</button>
						</div>
					</div>
				</form>
			</div>
			{users.length > 0 && (
				<div>
					<button
						className='btn btn-ghost btn-lg'
						onClick={handleClick}>
						Clear
					</button>
				</div>
			)}
		</div>
	);
}

export default UserSearch;
