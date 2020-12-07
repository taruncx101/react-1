import React from 'react';
const navLeftSideItems = [
  { id: "home", text: "Home", link: "/", auth: false },
  { id: "users", text: "Users", link: "/users", auth: true },
];

const navRightSideItems = [
  { id: "login", text: "Login", link: "/login", auth: false },
  { id: "signup", text: "Signup", link: "/signup", auth: false },
];
 const Navigation = (props) => (
   <React.Fragment>
     <ul className="navbar-nav">
       {[
         ...navLeftSideItems
           .filter((item) => true)
           .map((item) => (
             <li className="nav-item" key={item.id}>
               <a className="nav-link" href="#">
                 {item.text}
               </a>
             </li>
           )),
       ]}
     </ul>
     <ul className="navbar-nav ml-auto">
       {[
         ...navRightSideItems
           .filter((item) => true)
           .map((item) => (
             <li className="nav-item" key={item.id}>
               <a className="nav-link" href="#">
                 {item.text}
               </a>
             </li>
           )),
       ]}
     </ul>
   </React.Fragment>
 );

export default Navigation;