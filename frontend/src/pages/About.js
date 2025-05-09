import React from "react";
import "./About.css";
import { logo } from './index';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-bg">
        <img src={logo} className="About-logo" alt="logo" />
        <h2>About Club Gamma</h2>
        <p>Empowering Student Tech Community</p>
      </div>
      <hr />
      <div className="what-gfi">
        <h2>What is GFI</h2>
        <p>GitHub advises the usage of "good first issue" (GFI) labels to identify issues that are feasible for newcomers to handle in order to speed up beginner onboarding. However, prior research demonstrates the scarcity and inappropriateness of manually classified GFIs, demonstrating the need for automated suggestions. In this project, we propose <strong>GFI-Web-app</strong>, a <strong>proof-of-concept</strong> for automatic GFI recommendation in reality (available at <a href="https://pending.com">https://pending.com</a>). Project administrators can set up GFI-app to find and tag potential GFIs so that beginners can quickly find issues to fix when submitting their first contributions.</p>
      </div>
      <hr />
      <div className="why-gfi">
        <h2>Why GFI</h2>
        <p>This website is primarily intended for developers who wish to contribute to open source software but are unsure of where or how to begin. This website gives developers filters so they may search and choose issues and repositories based on the programming languages they are most familiar with. Additionally, they have a choice in the issues they choose to address.</p>
      </div>
      <hr />
      <div className="contribution">
        <h2>Contribution Guidelines</h2>
        <p>Welcome hackers it is really awesome have you here! Before start contributing with this project make sure you read our <a href="https://github.com/clubgamma/Good_First_Issue_Web_App/blob/main/CODE_OF_CONDUCT.md">Code Of Conduct</a>, it is really important to make this inclusive and open to everyone, otherwise, it would not be awesome to have you here</p>
      </div>
      <hr />
      {/* New sections added below  by lakir*/}
      <div className="our-mission">
        <h2>Our Mission</h2>
        <p>At Club Gamma, we believe in fostering a community of passionate developers who are eager to contribute to the open-source ecosystem. Our mission is to make the process of finding suitable beginner-friendly issues easier and more accessible for everyone. We are dedicated to creating a welcoming space where everyone, regardless of experience level, can grow their skills and make meaningful contributions to the tech world.</p>
      </div>
      <hr />
      <div className="future-plans">
        <h2>Future Plans</h2>
        <p>Looking ahead, we plan to enhance the GFI-Web-app by integrating more advanced AI-powered recommendations, supporting additional programming languages, and collaborating with more open-source projects to further expand the pool of available GFIs. We also aim to develop educational resources and mentorship opportunities to help users grow beyond their first contributions and become long-term contributors in the open-source community.</p>
      </div>
      <hr />
      <div className="call-to-action">
        <h2>Join Us!</h2>
        <p>Are you ready to make an impact? Join the Club Gamma community today and start contributing to meaningful projects that empower developers like you. Together, we can change the future of open source!</p>
        <a href="https://github.com/clubgamma" className="cta-btn">Join Club Gamma</a>
      </div>
    </div>
  );
};

export default About;
