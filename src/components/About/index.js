import React from "react";
import coverImage from "../../assets/cover/me.JPG";
import "./stylesheet.css";
import ReactRoundedImage from "react-rounded-image";
import pikesPeakImage from "../../assets/cover/pikes-peak.jpeg";
import { BiMailSend } from "react-icons/bi";
import { RiNewspaperLine } from "react-icons/ri";

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
      <br />
      <br />

      <p>
        Hello and Welcome to my portfolio, my name is Alejandro Reveles I am a
        Full Stack Front end Developer who recently graduated from the UCLA
        coding boot camp extension, during my time there I enjoyed working on a
        team not only building projects but also tackling problem-solving
        challenges daily. In the six months of learning many new languages in
        the boot camp, I implemented some of the newest technologies to build
        in-class projects such as express.js, node.js, react, bootstrap, and
        javascript to tackle down class activities to prepare us for our group
        projects with my colleagues. With the new skills being taught weekly I
        was determined to code and fix complicated challenging problems, testing
        methods, and use best practices. I am Seeking to leverage broad
        development experience and hands-on technical expertise in a challenging
        role as an Associate Engineer, where I can apply my newly learned skills
        and can assist a team in both the frontend and backend. I am a great
        team player who not only loves to be a leader but also a great person to
        work with who can not only help others but make many friendships along
        the way, which will help me create many mentors to truly make me a
        successful Full Stack Software Engineer. Please feel free to get in
        contact with me via email by selecting the icon below.
      </p>
      <div>
        <a className="icon" href="mailto:alexreveles@yahoo.com" target="_blank">
          <BiMailSend style={{ color: "white" }} />
        </a>
      </div>
    </section>
  );
}

export default About;
