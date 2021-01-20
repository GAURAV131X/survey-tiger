import logo from "./logo.png";
import "./App.css";
import { Button } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/create">Create Survey</Route>
          <Route path="/take">Take Survey</Route>
          <Route path="/">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Link to="/create">
                <Button className="survey-main-button">Create Survey</Button>
              </Link>
              <Link to="/take">
                <Button className="survey-main-button">Take Survey</Button>
              </Link>
            </header>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;