import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="hero">
        <h1>"Hi, I'm Christoffer - A Front-end Developer and Illustrator."</h1>
        <p>"I combine technical precision with creative vision to craft engaging digital experiences and inspiring visuals."</p>
      </div>
      <div className="button">
        <Link to='/code-portfolio'>View Code Portfolio</Link>
      </div>
      <div className="button">
        <Link to='/art-portfolio'>View Art Portfolio</Link>
      </div>
      <div>
        <div>
          <h2>Technical Skills</h2>
          <p>Front-End Development | Concept Art | Responsive Design | API Integration</p>
        </div>
        <div>
          <p>"Whether I'm designing intuitive user interfaces or illustrating fantastical worlds, I approach every project with passion and curiosity."</p>
        </div>
      </div>
    </>
  )
}

export default Home