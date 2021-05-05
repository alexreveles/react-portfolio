import React from "react";
import "./stylesheet.css";
import happyTails from "../../assets/cover/happy-tails.png";
import movieHunt from "../../assets/cover/movie-hunt-app.png";
import runBuddy from "../../assets/cover/run-buddy.png";
import weatherDashboard from "../../assets/cover/weather-dashboard.png";
import workdaySchedular from "../../assets/cover/workday-schedular.png";

function Portfolio() {
  return (
    <div className="container-fluid">
      <div className="row g-4">
        <h1 className="project-title">Projects</h1>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card-project">
            <a href="https://happy-happy-tails.herokuapp.com/">
              {/* <img src={happyTails} className="card-img-top" alt="happy-tails-project" /> */}
              <img
                src={require("../../assets/cover/happy-tails.png").default}
                className="card-img-top"
                alt="happy-tails-project"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Happy Tails</h5>
              <p className="card-text">
                HTML | CSS | Materialize | JavaScript | Sequelize |
                Node.js | Express.js | Handlebars | MySQL | RESTful API | ORM |
                Heroku | brypt
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card-project">
            <a href=" https://alexreveles.github.io/movie-hunt-app/">
              {/* <img
                src={movieHunt}
                className="card-img-top"
                alt="movie-hunt-project"
              /> */}
              <img
                src={require("../../assets/cover/movie-hunt-app.png").default}
                className="card-img-top"
                alt="movie-hunt-project"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Movie Hunt</h5>
              <p className="card-text">
                HTML | CSS | Materialize |
                JavaScript | JQuery|Modal <br /> <br />
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card-project">
            <a href="https://alexreveles.github.io/run-buddy/">
              {/* <img
                src={runBuddy}
                className="card-img-top"
                alt="run-buddy-project"
              /> */}
              <img
                src={require("../../assets/cover/run-buddy.png").default}
                className="card-img-top"
                alt="run-buddy-project"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Run Buddy</h5>
              <p className="card-text">CSS | HTML</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card-project">
            <a href="https://alexreveles.github.io/weather-dashboard">
              {/* <img
                src={weatherDashboard}
                className="card-img-top"
                alt="weather-day-project"
              /> */}
              <img
                src={require("../../assets/cover/weather-dashboard.png").default}
                className="card-img-top"
                alt="weather-day-project"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Weather Dash Board</h5>
              <p className="card-text">
                HTML | CSS | Bootstrap |
                JavaScript
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card-project">
            <a href="https://alexreveles.github.io/workday-scheduler/">
              {/* <img
                src={workdaySchedular}
                className="card-img-top"
                alt="work-day-project"
              /> */}
              <img
                src={require("../../assets/cover/workday-schedular.png").default}
                className="card-img-top"
                alt="work-day-project"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Work Day</h5>
              <p className="card-text">
                HTML | CSS | Bootstrap |
                jQuery | JavaScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
