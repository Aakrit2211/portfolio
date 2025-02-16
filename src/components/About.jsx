import React from 'react';
import profile from '../assets/profile.jpg';
function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
      <img src={profile} alt="Profile" className="profile-img" />

        <p>
          Hello! I'm a passionate developer with experience in web development.
          I love creating beautiful and functional websites using modern technologies.
        </p>
      </div>
    </section>
  );
}

export default About;