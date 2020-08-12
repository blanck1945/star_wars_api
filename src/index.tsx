import * as React from "react";
import * as reactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./main.scss";
import Navbar from "./layouts/Navbar/navbar";
import Footer from "./layouts/Footer/Footer";
import HomeNavbar from "./components/home_navbar/HomeNavbar";
import { SWRConfig } from "swr";

const App: React.FunctionComponent = () => {
  const [show, setShow] = React.useState<boolean>(true);

  return (
    <div className="container">
      <Navbar show={show} setShow={setShow} />
      <Switch>
        <Route exact path="/">
          <HomeNavbar show={show} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

reactDOM.render(
  <Router>
    <SWRConfig value={{ revalidateOnFocus: false }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SWRConfig>
  </Router>,
  document.getElementById("root")
);
