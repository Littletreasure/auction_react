import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Item from "./Components/Item";
import { Router } from "@reach/router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Main path="/" />
        <Item path="/item/:num" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
