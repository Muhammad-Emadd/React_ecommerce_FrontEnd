import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
// import Trash from "./Components/try/trash";
// import Trash0 from "./Components/try/Trash0";
// import Trash2 from "./Components/try/Trash2";
import Body, { BodyFn } from "./Components/Body/Body";
// import CartPage from "./Components/CartPage/CartPage";
// import { CATEGORIES } from "./GraphQL/Queries";

export class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Trash0 /> */}
        <NavBar />
        <BodyFn />
        {/* <Route exact path="/" component={}/>
      <Route path="/" component={}/>
      <Route path="/CartPage" component={}/> */}
        {/* <CartPage />; */}
      </div>
    );
  }
}

{
  /* 
<Trash2 />
<Body /> */
}
export default App;
