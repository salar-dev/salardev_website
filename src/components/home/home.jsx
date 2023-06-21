import { React} from "react";
import "./home.css";
import "../../fonts.css";
import { TbSend } from "react-icons/tb";
import SalarPhoto from "../../assets/images/salar_photo.svg";
import Tilt from "react-vanilla-tilt";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <div className="left_side">
          <h3>Hello, I am</h3>
          <h1 style={{ fontFamily: "OCRMain" }}>{"<salar dev/>"} </h1>
          <h3>Fullstack Developer</h3>
          <p>
            If you want to create your project, whether it is a mobile
            application or a website for your business, or you want technical
            advice, or the implementation of any artificial intelligence or
            automation program, I can help you.
          </p>
          <Tilt options={{ scale: 1}}
          className="title"
            style={{
              backgroundColor: "transparent",
            }}>
            
            <div className="button">
            <TbSend className="sendIcon" />
            <h4>Contact Me</h4>
          </div>
          </Tilt>
          
        </div>
        <div className="right_side">
          <Tilt
            className="title"
            options={{ scale: 1 }}
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <img src={SalarPhoto} alt="Salar Dev" />
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Home;
