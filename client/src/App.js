import "./App.css";
import NewsLetter from "./components/newsletter/NewsLetter";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
        </Switch>
        <NewsLetter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
