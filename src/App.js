import Foods from "./Components/Foods/Foods";
import Header from "./Components/Header/Header";
import NavbarMenu from "./Components/Navbar/NavbarMenu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FoodDetails from "./Components/FoodDetails/FoodDetails";

function App() {
  return (
    <Router>
      <NavbarMenu></NavbarMenu>
      <Switch>
        <Route exact path="/">
          <Header></Header>
          <Foods></Foods>
        </Route>
        <Route exact path="/dinner">
          <Header></Header>
          <Foods></Foods>
        </Route>
        <Route exact path="/breakfast">
          <Header></Header>
          <Foods></Foods>
        </Route>
        <Route exact path="/foods/:id">
          <FoodDetails></FoodDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
