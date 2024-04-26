import React from "react";
import { Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import coneImage from "./assets/cone.png";
import loopImage from "./assets/loop.png";
import githubImage from "./assets/github.png";
import Info from "./Info";
function Home() {
  return (
    <ErrorBoundary>
      <div className="home">
        <Info />
        <div className="home__top">
          <h2>
            Welcome. This website is simply to display list of Ojima's github
            repos. You can also <span style={{ color: "blue" }}>add</span> and{" "}
            <span style={{ color: "red" }}>delete</span> repo
            <br />
            <br />
            Click the button below to explore
          </h2>
          <figure>
            <img className="img-1" src={coneImage} alt="" />
            <img className="img-2" src={coneImage} alt="" />
            <img className="img-3" src={coneImage} alt="" />
            <img className="img-4" src={coneImage} alt="" />
            <img className="img-5" src={githubImage} alt="" />
            <img className="img-6" src={githubImage} alt="" />
            <img className="img-7" src={githubImage} alt="" />
            <img className="img-8" src={loopImage} alt="" />
            <img className="img-9" src={loopImage} alt="" />
            <img className="img-10" src={loopImage} alt="" />
            <img className="img-11" src={loopImage} alt="" />
            <img className="img-12" src={coneImage} alt="" />
            <img className="img-13" src={coneImage} alt="" />
            <img className="img-14" src={coneImage} alt="" />
            <img className="img-15" src={coneImage} alt="" />
            <img className="img-16" src={githubImage} alt="" />
            <img className="img-17" src={githubImage} alt="" />
            <img className="img-18" src={githubImage} alt="" />
            <img className="img-19" src={loopImage} alt="" />
            {/* <img className="img-20" src={loopImage} alt="" />
            <img className="img-21" src={loopImage} alt="" />
            <img className="img-22" src={loopImage} alt="" /> */}
          </figure>
        </div>

        <Link to="/repos" className="button">
          Explore
        </Link>
      </div>
    </ErrorBoundary>
  );
}

export default Home;
