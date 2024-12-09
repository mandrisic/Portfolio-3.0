import React, { useState } from "react";
import avatar from '../assets/img/avatar.svg';
import avatar2 from '../assets/img/avatar-2.svg';

const Intro = () => {
  const [selectedOption, setSelectedOption] = useState("Introduction");

  const texts = {
    Introduction: {
      paragraphs: [
        <>My name is Mirna and I'm a frontend developer and UX/UI designer. My love for web development and design grew during my studies, and I'm now looking for opportunities to work in the IT world. This portfolio showcases my skills and projects as I continue to grow in the field. I hope you like it.</>
      ],
    },
    Technologies: {
      paragraphs: [
        <><span className="vibrant">Advanced knowledge:</span> HTML, CSS, Javascript, React, Git, Github</>,
        <><span className="vibrant">Intermediate knowledge:</span> Sass, Bootstrap, Foundation, Firebase, MobX, Redux and BEM methodology</>,
        <><span className="vibrant">Additional skills:</span> Figma, Inkscape, Canva and Responsive design</>
      ],
    },
    Hobbies: {
      paragraphs: [
        <>I enjoy crocheting, just like a grandma, and riding my bike on sunny days. Designing and programming bring me joy, especially when everything runs smoothly.</>,
        <><span className="vibrant">Fun fact:</span> Last year I won a car, so luck seems to be on my side!</>
      ],
    },
  };

  return (
    <div className="intro" id='intro'>
        <div className="intro__container">
          <div className="intro__avatar">
            <img src={avatar} className="avatar-1" alt="profile" />
            <img src={avatar2} className="avatar-2" alt="profile" />
            <svg className="shape intro__shape" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" pointerEvents="none">
              <defs>
                <linearGradient id="sw-gradient" gradientTransform="rotate(161, 0.5, 0.5)">
                  <stop stopColor="#f877b9" offset="0"></stop>
                  <stop stopColor="#4cf2a0" offset="1"></stop>
                </linearGradient>
              </defs>
              <path fill="url(#sw-gradient)" transform="translate(100 100)">
                <animate 
                  attributeName="d" 
                  dur="12s" 
                  repeatCount="indefinite" 
                  values="
                  M34.5,-51.9C48.4,-44.7,66,-41.4,69.2,-32.3C72.3,-23.1,60.9,-8,51.8,2.6C42.8,13.2,36,19.2,32.2,33.5C28.5,47.8,27.9,70.4,20.7,74.3C13.4,78.1,-0.4,63.4,-7,49.6C-13.6,35.9,-12.8,23.2,-20.1,16.5C-27.4,9.8,-42.8,9.1,-50.9,2.7C-59.1,-3.7,-60.1,-15.8,-57,-27.4C-53.9,-39.1,-46.6,-50.2,-36.5,-59.1C-26.3,-68.1,-13.1,-74.9,-1.4,-72.7C10.3,-70.4,20.5,-59.2,34.5,-51.9Z;
                  M15.6,-28.9C24.3,-18.8,38,-21.2,46.5,-17C55,-12.8,58.2,-2,52.3,4.3C46.4,10.6,31.4,12.4,24.6,22.6C17.8,32.7,19.1,51.2,14.9,53.9C10.6,56.7,0.8,43.7,-12.4,40.6C-25.7,37.5,-42.3,44.3,-50.6,40.6C-58.8,36.9,-58.7,22.6,-60.9,8.6C-63.1,-5.4,-67.6,-19.2,-60.7,-24.9C-53.7,-30.6,-35.2,-28.3,-23.1,-36.8C-11.1,-45.4,-5.6,-64.8,-1,-63.3C3.5,-61.7,7,-39,15.6,-28.9Z;
                  M23,-28.8C32.2,-29.8,43.7,-27.5,53.7,-20.2C63.7,-12.9,72.2,-0.7,71.4,10.9C70.7,22.4,60.7,33.2,48.5,35.6C36.4,38,22,32.1,9.8,37.7C-2.4,43.3,-12.6,60.3,-19,60.4C-25.5,60.5,-28.2,43.7,-35.5,32.4C-42.8,21.1,-54.7,15.3,-59.5,6.3C-64.4,-2.8,-62.3,-15.1,-56.9,-25.5C-51.5,-35.9,-42.7,-44.4,-32.7,-42.9C-22.6,-41.4,-11.3,-30.1,-2.2,-26.7C6.9,-23.2,13.8,-27.7,23,-28.8Z;
                  M16.6,-26.1C26.3,-19.7,42.2,-23.1,47.5,-19.4C52.9,-15.6,47.7,-4.8,48.1,8.4C48.5,21.5,54.4,36.9,50.2,45.7C46,54.6,31.7,56.9,18.1,60.3C4.5,63.7,-8.4,68.2,-21.9,67.4C-35.3,66.7,-49.2,60.7,-48.2,49C-47.2,37.2,-31.3,19.7,-34.2,4.5C-37.1,-10.8,-58.8,-23.8,-64.4,-36.8C-69.9,-49.8,-59.3,-62.7,-45.9,-67.4C-32.4,-72.1,-16.2,-68.6,-6.4,-58.7C3.5,-48.8,7,-32.5,16.6,-26.1Z;
                  M16.2,-37.8C18.2,-24,15,-14.7,26.6,-7C38.2,0.7,64.5,6.9,73.1,16.9C81.7,27,72.4,40.9,58.6,43.1C44.7,45.3,26.3,35.9,14.9,29.5C3.6,23.1,-0.6,19.7,-12.2,24.3C-23.9,28.8,-42.9,41.3,-48.7,39.5C-54.5,37.7,-47.1,21.7,-51,6.2C-55,-9.3,-70.4,-24.2,-67.5,-30.9C-64.5,-37.5,-43.2,-35.8,-28.9,-44C-14.6,-52.2,-7.3,-70.3,-0.1,-70.1C7.1,-70,14.3,-51.6,16.2,-37.8Z;
                  M34.5,-51.9C48.4,-44.7,66,-41.4,69.2,-32.3C72.3,-23.1,60.9,-8,51.8,2.6C42.8,13.2,36,19.2,32.2,33.5C28.5,47.8,27.9,70.4,20.7,74.3C13.4,78.1,-0.4,63.4,-7,49.6C-13.6,35.9,-12.8,23.2,-20.1,16.5C-27.4,9.8,-42.8,9.1,-50.9,2.7C-59.1,-3.7,-60.1,-15.8,-57,-27.4C-53.9,-39.1,-46.6,-50.2,-36.5,-59.1C-26.3,-68.1,-13.1,-74.9,-1.4,-72.7C10.3,-70.4,20.5,-59.2,34.5,-51.9Z
                  ">
                </animate>
              </path>
            </svg>
          </div>
          <h1 className="intro__title">About me</h1>
          <div className="intro__options">
            {Object.keys(texts).map((option) => (
            <div
              key={option}
              className={`option ${selectedOption === option ? "active" : ""}`}
              onClick={() => setSelectedOption(option)}>
              {option}
            </div>
          ))}
        </div>
        
        <div className="intro__paragraph"> 
          {texts[selectedOption].paragraphs.map((paragraph, index) => (
            <p key={index} style={{ marginBottom: "10px" }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Intro
