import { stripTrailingSlash } from "history/PathUtils";
import React from "react";
import "./stylesheet.css";


function Portfolio() {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <h1>Projects</h1>
        <div className="card">
          <img src="../../assets/cover/happy-tails.png" className="card-img-top" alt="happy-tails-project" />
          <div className="card-body">
            <h5 className="card-title">Happy Tails</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="..." className="card-img-top" alt="movie-hunt-project" />
          <div className="card-body">
            <h5 className="card-title">Movie Hunt</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="..." className="card-img-top" alt="run-buddy-project" />
          <div className="card-body">
            <h5 className="card-title">Run Buddy</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="..." className="card-img-top" alt="weather-day-project" />
          <div className="card-body">
            <h5 className="card-title">Weather Day</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="..." className="card-img-top" alt="work-day-project" />
          <div className="card-body">
            <h5 className="card-title">Work Day</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
