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
       Full Stack Developer from the UCLA coding bootcamp, during my time there I enjoyed working on a team not only building projects but also tackling problem solving challenges. <br />
       In the six months of learning many new languages in the bootcamp I implemented some of the newest technologies to build many small projects with my collegues and determined problems,<br />
        testing methods, and best practices.
       Seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Front-end Developer.

      </p>
    </section>
  );
}

export default About;
