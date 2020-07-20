import React from "react";
import Job from "./Job";

function Jobs() {
  return (
    <div className="sections">
      <Job
        className="sydneyBoutique"
        title="Full Time Sales Associate - Sydney Boutique"
        contractType="CDI"
        country="Australie"
        city="Sydney"
      ></Job>

      <Job
        className="secuPantin"
        title="Agent de Sécurité - Pantin"
        contractType="CDI"
        country="France"
        city="Pantin"
      ></Job>

      <Job
        className="respAtelier"
        title="Responsable d'Atelier (H/F)"
        contractType="CDD"
        country="France"
        city="Paris"
      ></Job>

      <Job
        className="chefPro"
        title="Chef de Projet"
        contractType="CDD"
        country="France"
        city="Paris"
      ></Job>

      <Job
        className="devReact"
        title="Développeuse React"
        contractType="CDI"
        country="France"
        city="Paris"
      ></Job>

      <Job
        className="saleStock"
        title="Sales Associate Stockholm"
        contractType="CDI"
        country="Suède"
        city="Stockholm"
      ></Job>

      <Job
        className="vendMontana"
        title="Vendeur/se - Crans Montana"
        contractType="CDI"
        country="Suisse"
        city="Crans Montana"
      ></Job>

      <Job
        className="dataAnaly"
        title="CRM & Data Quality Analyst"
        contractType="CDI"
        country="USA"
        city="New-York"
      ></Job>

      <Job
        className="inf"
        title="Infirmière H/F"
        contractType="CDI"
        country="France"
        city="Lorient"
      ></Job>
    </div>
  );
}
export default Jobs;
