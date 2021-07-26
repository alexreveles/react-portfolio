import React from "react";
import "./stylesheet.css";
import happyTails from "../../assets/cover/happy-tails.png";
import happyTailsV2 from "../../assets/cover/happy-tailsV2.png";
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
            <a href="https://happytails-v2.herokuapp.com/" target="_blank">
              {/* <img src={happyTailsV2} className="card-img-top" alt="happy-tails-project" /> */}

              <img
                src={require("../../assets/cover/happy-tailsV2.png").default}
                className="card-img-top"
                alt="happy-tails-project"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Happy Tails 2.0</h5>
              <p>
                {" "}
                As a shelter employee / volunteer, I want to track the dogs
                daily activities and dogs difficulty levels so that all the dogs
                are taken care of and paired with a compatible caretaker that
                meets the required experience. As a shelter administrator I want
                to track daily activity, add dogs, as well as be able to
                de-activate / re-activate users and dogs.
              </p>
              <p className="card-text">
                CSS | JavaScript | Materialize | React | Node.JS | Express.JS |
                MongoDB | MongooseODM | GraphQL | Heroku | Apollo Server | JSON
                Webtoken | React-hooks | Global State React-Router-Dom | Bcrypt
                | Stripe-js | and more.
              </p>
              <a
                href="https://happytails-v2.herokuapp.com/"
                target="_blank"
                role="button"
              >
                <button type="button" className="btn btn-outline-dark">
                  Deployed Link
                </button>
              </a>
              <br />
              <br />
              <a
                href="https://github.com/alexreveles/happytails-v2"
                target="_blank"
                role="button"
              >
                <button type="button" className="btn btn-outline-dark">
                  Github Link
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card-project">
            <a href="https://happy-happy-tails.herokuapp.com/" target="_blank">
              {/* <img src={happyTails} className="card-img-top" alt="happy-tails-project" /> */}

              <img
                src={require("../../assets/cover/happy-tails.png").default}
                className="card-img-top"
                alt="happy-tails-project"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Happy Tails</h5>
              <p>
                A a shelter employee/volunteer, I WANT to track the dogs daily
                activities and dogs difficulty levels so that all the dogs are
                taken care of and paired with a compatible caretaker that meets
                the required experience.
              </p>
              <p className="card-text">
                HTML | CSS | Materialize | JavaScript | Sequelize | Node.js |
                Express.js | Handlebars | MySQL | RESTful API | ORM | Heroku |
                brypt
              </p>
              <a
                href="https://happy-happy-tails.herokuapp.com/"
                target="_blank"
                role="button"
              >
                <button type="button" className="btn btn-outline-dark">
                  Deployed Link
                </button>
              </a>
              <br />
              <br />
              <br />
              <a
                href="https://github.com/alexreveles/happy-tails"
                target="_blank"
                role="button"
              >
                <button type="button" className="btn btn-outline-dark">
                  Github Link
                </button>
              </a>
              <br />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card-project">
            <a
              href="https://alexreveles.github.io/movie-hunt-app/"
              target="_blank"
            >
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
              <p>
                Movie hunt is an application where users can input a search of a
                movie title and receive relevant information. Some of the
                information returned from the search includes the movie plot,
                year of release, rating, genre, and movie poster. This will
                allow users to find the perfect movie to watch on there free
                time.
              </p>
              <p className="card-text">
                HTML | CSS | Materialize | JavaScript | JQuery | Modal
                <br />
                <br />
              </p>
              <a
                href="https://alexreveles.github.io/movie-hunt-app/"
                target="_blank"
                role="button"
              >
                <button type="button" className="btn btn-outline-dark">
                  Deployed Link
                </button>
              </a>
              <br />
              <br />
              <a
                href="https://github.com/alexreveles/movie-hunt-app"
                target="_blank"
                role="button"
              >
                <button type="button" className="btn btn-outline-dark">
                  Github Link
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card-project">
            <a href="https://alexreveles.github.io/run-buddy/" target="_blank">
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
              <p>
                A website that offers fitness training services and more, it is
                a friendly user website where you are able to select your
                trainer and see who they are and there specialty in fitness.
                Allowing users to select the correct run buddy for there level
                of experience. It is the best application to find a trainer and
                a friend in fitness.
              </p>
              <p className="card-text">CSS | HTML</p>
              <br />
              <br />
              <a
                href="https://alexreveles.github.io/run-buddy/"
                target="_blank"
                role="button"
              >
                <button type="button" className="btn btn-outline-dark">
                  Deployed Link
                </button>
              </a>
              <br />
              <br />
              <a
                href="https://github.com/alexreveles/run-buddy"
                target="_blank"
                role="button"
              >
                <button type="button" className="btn btn-outline-dark">
                  Github Link
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card-project">
            <a
              href="https://alexreveles.github.io/weather-dashboard"
              target="_blank"
            >
              {/* <img
                src={weatherDashboard}
                className="card-img-top"
                alt="weather-day-project"
              /> */}
              <img
                src={
                  require("../../assets/cover/weather-dashboard.png").default
                }
                className="card-img-top"
                alt="weather-day-project"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Weather Dash Board</h5>
              <p>
                A weather application that allows you to select your city and
                retrieve the weather data accurate to the weather bradcast, it
                is an application to give you a heads up on the current weather
                and the following weather for the next couple days describing
                the climate and giving you an exact detail of the days
                broadcast.
              </p>

              <p className="card-text">HTML | CSS | Bootstrap | JavaScript</p>
              <a
                href="https://alexreveles.github.io/weather-dashboard"
                target="_blank"
                role="button"
              >
                <button type="button" className="btn btn-outline-dark">
                  Deployed Link
                </button>
              </a>
              <br />
              <br />
              <a
                href="https://github.com/alexreveles/weather-dashboard"
                target="_blank"
                role="button"
              >
                <button type="button" className="btn btn-outline-dark">
                  Github Link
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card-project">
            <a
              href="https://alexreveles.github.io/workday-scheduler/"
              target="_blank"
            >
              {/* <img
                src={workdaySchedular}
                className="card-img-top"
                alt="work-day-project"
              /> */}
              <img
                src={
                  require("../../assets/cover/workday-schedular.png").default
                }
                className="card-img-top"
                alt="work-day-project"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Work Day</h5>
              <p>
                A calendar application that allows users to save events for each
                working hour from 9am to 5pm. This application allows you to see
                what tasks are needed to complete for the hour, as the hour is
                passed it will highligh in red, meaning that task for the hour
                is due. If it is highlighted in green then that task is
                approaching as it is needed to be completed.
              </p>
              <p className="card-text">
                HTML | CSS | Bootstrap | jQuery | JavaScript
              </p>
              <a
                href="https://alexreveles.github.io/workday-scheduler/"
                target="_blank"
                role="button"
              >
                <button type="button" className="btn btn-outline-dark">
                  Deployed Link
                </button>
              </a>
              <br />
              <br />
              <a
                href="https://github.com/alexreveles/workday-scheduler"
                target="_blank"
                role="button"
              >
                <button type="button" className="btn btn-outline-dark">
                  Github Link
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
