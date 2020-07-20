import React from "react";

import "./App.css";
import Jobs from "./components/Jobs";
import Title from "./components/Title";

function App() {
  return (
    <div className="container">
      <main>
        <Title className="header" title="The Job board"></Title>

        <Jobs> </Jobs>

        <footer>
          <p>
            Made with <b>React</b> by <b>Marine</b> at <b>Le Reacteur</b>
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
