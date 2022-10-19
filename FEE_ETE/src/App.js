import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";

import React from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import Details from "./components/pages/Details";
import ImageUploader from "./components/pages/ImageUploader";
import Gallery from "./components/pages/Gallery";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/image-uploader" component={ImageUploader} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
