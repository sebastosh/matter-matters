// import { useState } from 'react'
import metaData from "./data/meta.json";
import "./assets/style.css";
import Choices from "./components/choices";
import Exhibition from "./components/exhibition";
import Signatories from "./components/signatories";

function App() {

  const meta = metaData;


  const handlePrint = () => {
    window.print();
  };

  
  return (
    <div id="main">
      <header>
        <h1><strong>{meta.title}:</strong> {meta.subtitle}</h1>
        <p className="description">{meta.description}</p>
      </header>

      <form>
        <Choices />
        <div className="page-break"></div>
        <Exhibition />
        <Signatories />
      </form>
       <button className="print" onClick={handlePrint}>Print</button>
    </div>
  );
}

export default App;
