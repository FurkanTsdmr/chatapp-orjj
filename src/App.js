import "./App.css";

import { ChatProvider } from "./context/ChatContext";
import Container from "./components/Container";
import DarkMode from "./components/DarkMode.tsx";

function App() {
	return (

			<ChatProvider>
				<DarkMode />
				<Container />
			</ChatProvider>

	);
}

export default App;