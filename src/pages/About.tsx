import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const About = () => {
  return (
    <div className="about-page">
      <div className="img">
        <img src="public/imgs/Mohamed.jpeg" alt="Mohamed Belalia" />
        <h1>Mohamed Belalia</h1>
        <p>Hello I am Mohamed Belalia I am a web developer I created This Website 
          To Practice Typescipt
        </p>
        <div className="icons">
          <a href="https://www.linkedin.com/in/mohamed-belalia-0b886a229/"><FaLinkedin /></a>
          <a href="https://github.com/mohamedBelalia"><FaGithub/></a>
        </div>
      </div>
    </div>
  )
}

export default About