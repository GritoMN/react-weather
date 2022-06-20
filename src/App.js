import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by Grito and is {""}{" "}
        <a href="https://github.com/GritoMN/portfolio-project" target="_blank">
          open-sourced in Git Hub{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
