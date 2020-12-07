import React from "react";
import Header from "../Header/Header";

export default class Layout extends React.Component{
    render() {
        return (
          <React.Fragment>
            <Header />
            <div className="container">{this.props.children}</div>
          </React.Fragment>
        );
    }
}