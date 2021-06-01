import React from "react";
import coverImage from "../../assets/cover/me.JPG";
import "./stylesheet.css";
import ReactRoundedImage from "react-rounded-image";

function About() {
  return (
    <section className="my-5 about">
      <h1 id="about">About Me</h1>
      <ReactRoundedImage
        image={coverImage}
        roundedColor="#2F394D"
        imageWidth="200"
        imageHeight="250"
      />

      <p>
        Hello and Welcome to my portfolio, my name is Alejandro Reveles I am
        Full Stack Developer from the UCLA coding bootcamp, during my time there
        I enjoyed working on a team not only building projects but also tackling
        problem solving challenges. In the six months of learning many new
        languages in the bootcamp I implemented some of the newest technologies
        to build many small projects with my collegues and determined to solve
        complicated problems, testing methods, and using best practices. I am
        Seeking to leverage broad development experience and hands-on technical
        expertise in a challenging role as a Project Manager, playing sports all
        my life Ive learned to be not only a team player but also become a
        leader, I truly have a passion to make sure i lead my team into success
        and accomplish any task and deadlines on time.
      </p>
    </section>
  );
}

export default About;
