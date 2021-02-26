import "./styles/App.scss";
import Nav from "./components/Nav.js";
import Main from "./pages/Main.js";
import About from "./pages/About.js";
import Games_Store from "./pages/Games_Store.js";
import Gadgets_Store from "./pages/Gadgets_Store.js";
import Contact from "./pages/Contact.js";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/about-us" component={About}></Route>
        <Route path="/store/games" component={Games_Store}></Route>
        <Route path="/store/gadgets" component={Gadgets_Store}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
