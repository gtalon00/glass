import React from "react";
// import Footer from '../components/Footer'
// import Header from '../components/Header'

export default function Layout(props) {
  // const { currentUser } = props

  return (
    <div className="parent-of-props">
      {/* <Header /> */}
      {props.children}
      {/* <Footer currentUser={currentUser}/> */}
    </div>
  );
}
