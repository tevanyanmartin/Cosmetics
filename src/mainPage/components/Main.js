import Header from "./Header";
import CarouselPrint from "../CarouselPrint";
import DiscoverEvenMore from "../DiscoverEvenMore";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Lips from "../../Nav/Lips";
import Face from "../../Nav/Face";
import Eyes from "../../Nav/Eyes";

function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/lips">
          <Lips />
        </Route>
        <Route path="/face">
          <Face />
        </Route>
        <Route path="/eyes">
          <Eyes />
        </Route>
        <Route path="/">
          <Header />
          <CarouselPrint />
          <DiscoverEvenMore />
        </Route>
      </Switch>
    </Router>
  );
}

export default Main;
