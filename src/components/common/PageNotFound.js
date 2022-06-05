import React from "react";
import "./PageNotFound.css";
import sadDog from "./sad-dog.jpg"

const PageNotFound = () => {
  return (
    <div className="four0four">
      <h1>404 Error</h1>
      <img id="splashdog" src= {sadDog} alt="sad dog" />
      <h2>Page Not Found</h2>
    </div>
  );
};

export default PageNotFound;
