import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import Products from "./Products";
import Electronics from "./Electronics";
import Idealtv from "./Idealtv";
import Topcategories from "./Topcategories";
import Gamingaccessories from "./Gamingaccessories";
import Computer from "./Computer";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/computer&accessories">
            <Header />
            <Computer />
          </Route>
          <Route path="/gamingaccessories">
            <Header />
            <Gamingaccessories />
          </Route>
          <Route path="/topcategories">
            <Header />
            <Topcategories />
          </Route>
          <Route path="/idealtv">
            <Header />
            <Idealtv />
          </Route>
          <Route path="/electronics">
            <Header />
            <Electronics />
          </Route>
          <Route path="/amazonbasic">
            <Header />
            <Products />
          </Route>

          <Route path="/users">
            <Header />
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
