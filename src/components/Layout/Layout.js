import React from "react";
import Header from "../Header/Header";

export default function Layout(props) {
          return (
          <React.Fragment>
            <Header {...props}/>
            <div className="container">{props.children}</div>
          </React.Fragment>
        );
}