import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import New from "./Nav/New";
import Lips from "./Nav/Lips";
import Face from "./Nav/Face";
import Eyes from "./Nav/Eyes";
import Brushes from "./Nav/Brushes";
import Skin from "./Nav/Skin";
import BestSellers from "./Nav/BestSellers";
import Brands from "./Nav/Brands";

import Nav from "./mainPage/components/Nav";
import Main from "./mainPage/components/Main";
import Footer from "./mainPage/components/Footer";
import Login from "./Nav/Login/Login";
// import Form from "./Nav/Login/LoginInput";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/new">
            <Nav />
            <New />
            <Footer />
          </Route>
          <Route path="/lips">
            <Nav />
            <Lips />
            <Footer />
          </Route>
          <Route path="/face">
            <Nav />
            <Face />
            <Footer />
          </Route>
          <Route path="/eyes">
            <Nav />
            <Eyes />
            <Footer />
          </Route>
          <Route path="/brushes">
            <Nav />
            <Brushes />
            <Footer />
          </Route>
          <Route path="/skin">
            <Nav />
            <Skin />
            <Footer />
          </Route>
          <Route path="/bestSellers">
            <Nav /> <BestSellers />
            <Footer />
          </Route>
          <Route path="/brands">
            <Nav />
            <Brands />
            <Footer />
          </Route>
          <Route path="/">
            <Nav />
            <Main />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
