import AsideLeft from "./components/AsideLeft";
import AsideRight from "./components/AsideRight";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";


export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <div style={{ display: "flex" }}>
        <AsideLeft />
        <Main />
        <AsideRight />
      </div>
      <Footer />
    </>
  );
}
