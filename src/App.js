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
        <Main />
      </div>
      <Footer />
    </>
  );
}
