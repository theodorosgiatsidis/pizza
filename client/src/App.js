import "./App.css";
import NewsLetter from "./components/newsletter/NewsLetter";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { StoreContextProvider } from "./context/store";
import Profile from "./pages/profile/Profile";
import Andresses from "./pages/andresses/Andresses";

function App() {
  return (
    <StoreContextProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/pizzas/:id">
              <Product />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/user/profile">
              <Profile />
            </Route>
            <Route path="/user/andresses">
              <Andresses />
            </Route>
          </Switch>
          <NewsLetter />
          <Footer />
        </div>
      </Router>
    </StoreContextProvider>
  );
}

export default App;
