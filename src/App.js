import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
function App() {
	return (
		<Router>
			<div className='flex flex-col justify-between h-screen'>
				<Navbar title='Github Finder' />
				<main className='container mx-auto px-3 pb-13'>Content</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
