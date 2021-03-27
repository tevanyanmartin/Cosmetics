import { Link, Route, Switch } from "react-router-dom";
import "../../styles/BrandsStyle.css";
import Burberry from "../brands/Burberry";
import Clinique from "../brands/Clinique";
import Dior from "../brands/Dior";
import EsteeLauder from "../brands/EsteeLauder";
import KKW from "../brands/KKW";
import Kylie from "../brands/Kylie";
import Mac from "../brands/Mac";
import Nav from "../menu/Nav";
import Footer from "../section/Footer";

function Brands() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/brands/burberry">
          <div id="Burberry"></div>
        </Link>
        <Link to="/brands/esteeLauder">
          <div id="EsteeLauder"></div>
        </Link>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/brands/dior">
          <div id="Dior"></div>
        </Link>
        <Link to="/brands/kylie">
          <div id="Kylie"></div>
        </Link>
        <Link to="/brands/KKW">
          <div id="KKW"></div>
        </Link>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/brands/mac">
          <div id="Mac"></div>
        </Link>
        <Link to="/brands/clinique">
          <div id="Clinique"></div>
        </Link>
      </div>

      {/* <Switch>
        <Route path="/brands/burberry">
          <Nav />
          <Burberry />
          <Footer />
        </Route>
        <Route path="/brands/esteeLauder">
          <Nav />
          <EsteeLauder />
          <Footer />
        </Route>
        <Route path="/brands/dior">
          <Nav />
          <Dior />
          <Footer />
        </Route>
        <Route path="/brands/kylie">
          <Nav />
          <Kylie />
          <Footer />
        </Route>
        <Route path="/brands/KKW">
          <Nav />
          <KKW />
          <Footer />
        </Route>
        <Route path="/brands/mac">
          <Nav />
          <Mac />
          <Footer />
        </Route>
        <Route path="/brands/clinique">
          <Nav />
          <Clinique />
          <Footer />
        </Route>
      </Switch> */}
    </>
  );
}
export default Brands;
