import React, { useState } from "react";
import avatar from '../assets/img/avatar.svg';
import avatar2 from '../assets/img/avatar-2.svg';

const Intro = () => {
  const [selectedOption, setSelectedOption] = useState("Introduction");

  const texts = {
    Introduction: {
      paragraphs: [
        <>My name is Mirna and I'm a frontend developer. My love for web development grew during my studies, and I'm now looking for opportunities to work in the IT world. This portfolio showcases my skills and projects as I continue to grow in the field. I hope you like it.</>
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
