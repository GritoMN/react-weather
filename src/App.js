import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer>
        This project was coded by Grito and is {""}{" "}
        <a href="https://github.com/GritoMN/react-weather" target="_blank">
          open-sourced on Git Hub{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
