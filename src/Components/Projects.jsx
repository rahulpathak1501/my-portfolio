import { Link } from "react-router-dom";
import movieManager from "../assests/movieManager.jpg";

function Projects() {
  return (
    <>
      <h1 id="project-h1">Projects</h1>
      <div className="projects">
        <Link target="_blank" to="https://ez-snippet.vercel.app/">
          <div className="project-card">
            <img alt="Movie Manager" src={movieManager} id="movie_manager" />
            <h3>Movie Manager</h3>
            <div>React Hooks, Javascript, Html</div>
          </div>
        </Link>
        <Link target="_blank" to="https://ez-snippet.vercel.app/">
          <div className="project-card">
            <img alt="Movie Manager" src={movieManager} id="movie_manager" />
            <h3>Movie Manager</h3>
            <div>React Hooks, Javascript, Html</div>
          </div>
        </Link>
        <Link target="_blank" to="https://ez-snippet.vercel.app/">
          <div className="project-card">
            <img alt="Movie Manager" src={movieManager} id="movie_manager" />
            <h3>Movie Manager</h3>
            <div>React Hooks, Javascript, Html</div>
          </div>
        </Link>
        <Link target="_blank" to="https://ez-snippet.vercel.app/">
          <div className="project-card">
            <img alt="Movie Manager" src={movieManager} id="movie_manager" />
            <h3>Movie Manager</h3>
            <div>React Hooks, Javascript, Html</div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Projects;
