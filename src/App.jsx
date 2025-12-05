// import { useState } from 'react'
import "./assets/style.css";
import Choices from "./components/choices";
import Exhibition from "./components/exhibition";
import Signatories from "./components/signatories";

function App() {


  const handlePrint = () => {
    window.print();
  };

  
  return (
    <>
      <header>
        <h1>
          <strong>MATTER MATTERS:</strong> RIDER FOR EXHIBITION AGREEMENTS
        </h1>
        <p className="description">
          This is an exhibition agreement supplement for those of us who reckon
          with art and want coherence between our concern - regarding climate
          disruption and the megaflop of plastics-reliance and how we live among
          other sentient beings whose lives we do not think are less worthy of
          attention than our own - and how we actually go about things. They are
          mores, not lesses; while they are limitations, they are not
          restrictive. In fact,we consider them beautiful — a hedonic ethos. We
          aim to commit to them in a spirit of friendly disagreeableness: a
          friendly disagreeableness with the general customs and assumptions,
          within the mainstream of cultural production, of what is necessary to
          make/meet art today.
        </p>
      </header>

      <form>
        <Choices />
        <div className="page-break"></div>
        <Exhibition />
        <Signatories />
      </form>
       <button className="print" onClick={handlePrint}>Print</button>
    </>
  );
}

export default App;
