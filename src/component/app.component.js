import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import s from "./app.component.css";

class MyComponent extends Component {
  render() {
    return <div className={s.intro}>Hello World</div>;
  }
}

export default hot(module)(MyComponent);