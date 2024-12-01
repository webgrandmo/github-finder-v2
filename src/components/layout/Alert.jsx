import { useContext } from 'react';
import { FaCircleXmark } from 'react-icons/fa6';
import AlertContext from '../context/alert/AlertContext';

function Alert() {
	const { alert } = useContext(AlertContext);
	return (
		alert && (
			<p className='flex items-start mb-4 space-x-2 bg-red-500 px-2 py-2 w-96 rounded align-bottom'>
				{alert.type === 'error' && <FaCircleXmark className='align-baseline' />}
				<span className='flex-1 text-base font-semibold leading-7 text-white'>
					<strong>{alert?.msg}</strong>
				</span>
			</p>
		)
	);
}

export default Alert;
