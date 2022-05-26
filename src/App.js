import "./App.css";

import { ChatProvider } from "./context/ChatContext";
import Container from "./components/Container";
import DarkMode from "./components/DarkMode.tsx";
import Footer from "./components/Footer"

function App() {
	return (

		<ChatProvider>
			<div className="container">
				<div className="header">
					<h1 >ChatApp</h1>
				</div>
			</div>
			<DarkMode />
			<Container />
			<Footer />
		</ChatProvider>

	);
}

export default App;