import "./styles/App.scss";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Main from "./pages/Main.js";
import About from "./pages/About.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route path="/" exact component={Main}></Route>
				<Route path="/about-us" component={About}></Route>
			</Switch>
		</Router>
	);
}

export default App;
