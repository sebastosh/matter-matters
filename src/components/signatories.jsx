import { useState } from "react";

const Signatories = () => {
  const [signers, setSigners] = useState([
    { signerName: "", signerTitle: "" },
    { signerName: "", signerTitle: "" },
  ]);


    // New state to keep track of the number of field sets
  const [numFieldSets, setNumFieldSets] = useState(signers.length);

  // Function to add a new field set
  const handleAddSigner = (event) => {
    event.preventDefault();
    setNumFieldSets(numFieldSets + 1);
    setSigners([...signers, { signerName: "", signerTitle: "" }]);
  };

    // Function to remove a field set using the index
  const handleRemoveSigner = (event, index) => {

        event.preventDefault();
    const newSigners = [...signers];
    newSigners.splice(index, 1);
    setSigners(newSigners);
  };

  const handleChange = (event, index) => {
    const { value } = event.target;
    const newSigners = [...signers];
    if (event.target.name === "signerName") {
      newSigners[index].signerName = value;
      setSigners(newSigners);
    } else if (event.target.name === "signerTitle") {
      newSigners[index].signerTitle = value;
      setSigners(newSigners);
    }
  };

  return (
    <>
      <h3>
        <strong>SIGNATORIES</strong> (artist/s, curator, gallerist, preparator,
        etc.)
      </h3>
      <div>You are invited to co-half/half-sign this document. ...</div>
      <div className="signatories">
        {signers.map((signer, index) => (
          <div key={index} className="signer">
            <input
              type="text"
              value={signer.signerName}
              onChange={(e) => handleChange(e, index)}
              name="signerName"
              placeholder="Name"
            />
            <input
              type="text"
              value={signer.signerTitle}
              onChange={(e) => handleChange(e, index)}
              name="signerTitle"
              placeholder="Title"
            />
                        {/* Remove button for each field set */}
            <button onClick={(e) => handleRemoveSigner(e, index)}>Remove</button>
          </div>
        ))}
      </div>
            {/* Button to add a new field set */}
      <button onClick={handleAddSigner}>Add Signatory</button>
    </>
  );
};

export default Signatories;
