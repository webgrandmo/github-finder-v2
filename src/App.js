import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import User from './components/pages/User';
import NotFound from './components/pages/NotFound';
import Alert from './components/layout/Alert';
import { GithubProvider } from './components/context/github/GithubContext';
import { AlertProvider } from './components/context/alert/AlertContext';
function App() {
	return (
		<GithubProvider>
			<AlertProvider>
				<Router>
					<div className='flex flex-col justify-between h-screen'>
						<Navbar title='Github Finder' />
						<main className='container mx-auto px-3 pb-13'>
							<Alert />
							<Routes>
								<Route
									path='/'
									element={<Home />}
								/>
								<Route
									path='/about'
									element={<About />}
								/>

								<Route
									path='/user/:login'
									element={<User />}
								/>
								<Route
									path='/nontfound'
									element={<NotFound />}
								/>
								<Route
									path='/*'
									element={<NotFound />}
								/>
							</Routes>
						</main>
						<Footer />
					</div>
				</Router>
			</AlertProvider>
		</GithubProvider>
	);
}

export default App;
