import Weather from "./Weather";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <a
            href="https://github.com/Elvin4ik/SheCodesWeather.git"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code {""}
          </a>{" "}
          {""}
          <FontAwesomeIcon icon={faGithub} />
          {""} {""}
          by Elvina
        </footer>
      </div>
    </div>
  );
}
