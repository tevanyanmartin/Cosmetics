import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import New from "./Nav/New";
import Lips from "./Nav/Lips";
import Face from "./Nav/Face";
import Eyes from "./Nav/Eyes";
import Brushes from "./Nav/Brushes";
import Skin from "./Nav/Skin";
import BestSellers from "./Nav/BestSellers";

import Nav from "./mainPage/components/Nav";
import Main from "./mainPage/components/Main";
import Footer from "./mainPage/components/Footer";
import Brands from "./Nav/Brands";

export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/new">
          <New />
        </Route>
        <Route path="/lips">
          <Lips />
        </Route>
        <Route path="/face">
          <Face />
        </Route>
        <Route path="/eyes">
          <Eyes />
        </Route>
        <Route path="/brushes">
          <Brushes />
        </Route>
        <Route path="/skin">
          <Skin />
        </Route>
        <Route path="/bestSellers">
          <BestSellers />
        </Route>
        <Route path="/brands">
          <Brands />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
