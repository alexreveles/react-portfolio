import React from 'react';
import coverImage from "../../assets/cover/me.JPG";
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
    </section>
  );
}

export default About;