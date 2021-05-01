import React from "react";
import coverImage from "../../assets/cover/me.JPG";
import ReactRoundedImage from "react-rounded-image";
import "./stylesheet.css";

function About() {
  return (
    <section className="my-5">
      <div class="header-graphic">
        <img
          class="header-banner"
          src="src/assets/cover/background-image.jpeg"
          width="100"
          height="250"
          alt="jumbotron image"
        />
        <h1 id="about">About Me</h1>
        {/* <img src={coverImage} className="my-2" style={{ width: "10%" }} alt="cover" /> */}
        <ReactRoundedImage
          image={coverImage}
          roundedColor="#2F394D"
          imageWidth="200"
          imageHeight="250"
        />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit
          doloribus tenetur fugiat, temporibus enim commodi iusto libero magni
          deleniti quod quam consequuntur! Commodi minima excepturi repudiandae
          velit hic maxime doloremque. Quaerat provident commodi consectetur
          veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates
          pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
          excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
          Voluptatem quaerat non architecto ab laudantium modi minima sunt esse
          temporibus sint culpa, recusandae aliquam numquam totam ratione
          voluptas quod exercitationem fuga. Possimus quis earum veniam quasi
          aliquam eligendi, placeat qui corporis!
        </p>
      </div>
    </section>
  );
}

export default About;
