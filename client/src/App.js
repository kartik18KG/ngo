import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/home";
import Donate from "./components/donate/donate";
import Help from "./components/needHelp/Help";
import About from "./components/aboutUs/about";
import Footer from "./components/layout/Footer";
import Admin from "./components/admin/dashboard/admin";
import teacherList from "./components/admin/adminComponents/teachersList";
import helpSeekers from "./components/helpSeekers/helpSeekers";
import subscribersList from "./components/admin/adminComponents/subscribersList";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/donate" component={Donate} />
            <Route path="/help" component={Help} />
            <Route path="/about" component={About} />
            <Route exact path="/adminpanel" component={Admin} />
            <Route exact path="/helpseekers" component={helpSeekers} />
            <Route
              exact
              path="/adminpanel/sublist"
              component={subscribersList}
            />
            <Route
              exact
              path="/adminpanel/teacherslist"
              component={teacherList}
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
