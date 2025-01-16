import React from "react";
import { Page } from "../../components/layout/index"
import "./Home.css";
import Scroll from "../../components/commons/Scroll/Scroll";

const Home: React.FC = () => {
  return (
    <Page id="home" className="home">
      <div className="hero-info">
        <h1 className="home-title">Hi, my name is</h1>
        <h2 className="name">Claudio Robledo.</h2>
        <h3 className="home-subtitle">I'm Web Developer</h3>
      </div>
      <Scroll></Scroll>
    </Page>
  )
}

export default Home