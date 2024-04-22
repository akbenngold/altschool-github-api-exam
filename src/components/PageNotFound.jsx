import React from "react";
import errorImage from "./assets/404.svg";
import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <div className="pagenotfound">
      <img src={errorImage} alt="" />
      <h2> Sorry, it looks like the page got lost!</h2>
      <h3>(or someone has stolen it recently. hahahaha)</h3>
      <div className="pagenotfound__buttons">
        <Link to="/" className="button">
          Go back home
        </Link>
        <Link to="/repos" className="button">
          Show Repos
        </Link>
      </div>{" "}
    </div>
  );
}

export default PageNotFound;
