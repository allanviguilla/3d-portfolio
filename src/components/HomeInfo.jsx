import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hello, I am <span className="font-semibold">Allan Viguilla</span> 👋🏼
      <br />A Software Developer from Las Vegas, Nevada 📍
      <br />
      <span className="sm:text-sm text-xs text-center italic">
        (Click and Drag to explore or use the Left and Right arrow keys!)
      </span>
    </h1>
  ),
  2: (
    <InfoBox
      text="I am passionate about design, technology, and constantly challenging myself to learn new things."
      link="/about"
      btnText="About Allan"
    />
  ),
  3: (
    <InfoBox
      text="I have worked with teams of engineers and solo on passion projects to build some cool stuff."
      link="/work"
      btnText="Allan's Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Ready to build something together?"
      link="mailto:viguilla.allan@gmail.com"
      btnText="Contact Allan"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
