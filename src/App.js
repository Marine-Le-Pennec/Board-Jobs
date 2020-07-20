import React from "react";

import "./App.css";
import Jobs from "./components/Jobs";
import Title from "./components/Title";

function App() {
  return (
    <div className="container">
      <main>
        <Title title="The Job board"></Title>
        <div>
          <Jobs
            className="sydneyBoutique"
            title="Full Time Sales Associate - Sydney Boutique"
            contractType="CDI"
            country="Australie"
            city="Sydney"
          ></Jobs>
          <Jobs
            className="secuPantin"
            title="Agent de Sécurité - Pantin"
            contractType="CDI"
            country="France"
            city="Pantin"
          ></Jobs>
          <Jobs
            className="respAtelier"
            title="Responsable d'Atelier (H/F)"
            contractType="CDD"
            country="France"
            city="Paris"
          ></Jobs>
          <Jobs
            className="chefPro"
            title="Chef de Projet"
            contractType="CDD"
            country="France"
            city="Paris"
          ></Jobs>
          <Jobs
            className="devReact"
            title="Développeuse React"
            contractType="CDI"
            country="France"
            city="Paris"
          ></Jobs>
          <Jobs
            className="saleStock"
            title="Sales Associate Stockholm"
            contractType="CDI"
            country="Suède"
            city="Stockholm"
          ></Jobs>
          <Jobs
            className="vendMontana"
            title="Vendeur/se - Crans Montana"
            contractType="CDI"
            country="Suisse"
            city="Crans Montana"
          ></Jobs>
          <Jobs
            className="dataAnaly"
            title="CRM & Data Quality Analyst"
            contractType="CDI"
            country="USA"
            city="New-York"
          ></Jobs>
          <Jobs
            className="inf"
            title="Infirmière H/F"
            contractType="CDI"
            country="France"
            city="Lorient"
          ></Jobs>
        </div>

        <footer>
          <p>Made by Marine at Le Reacteur</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
