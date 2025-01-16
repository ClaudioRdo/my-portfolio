import React from "react"
import { Page } from "../../components/layout/index"
import "./About.css"

const About: React.FC = () => {
  return (
    <Page id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat illo, autem veritatis commodi porro hic atque quas ea quis earum vitae voluptas ducimus rerum culpa alias a deserunt, totam odio!</p>
      </div>
    </Page>

  )
}

export default About