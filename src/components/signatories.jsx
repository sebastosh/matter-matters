import { useState } from 'react';


const Signatories = () => {
  const [signers, setSigners] = useState([
    { signerName: '', signerTitle: '' },
    { signerName: '', signerTitle: '' }
  ]);

  const addSigner = () => {
    const newSigners = [...signers];
    newSigners.push({ signerName: '', signerTitle: '' });
    setSigners(newSigners);
  };

  const handleChange = (event, index) => {
    console.log("🚀 ~ handleChange ~ event, index:", event, index)
    const { value } = event.target;
    const newSigners = [...signers];
    newSigners[index].signerName = value;
    setSigners(newSigners);
    console.log('Updated signers:', signers); // Log the updated state for debugging
  };

  return (
    <>
      <h3>
        <strong>SIGNATORIES</strong> (artist/s, curator, gallerist,
          preparator, etc.)
      </h3>
      <div>You are invited to co-half/half-sign this document. The more signatories the easier it becomes to follow the guidelines and the clearer our collective conscience becomes. It can be signed in perpetuity or for a particular exhibition. (If working with an artist/gallery/institution that has not signed they can be temporary co-signatories for the specific exhibition in question. To formalise the commitment to lessen our un-helpful effects is helpful in its clarifying explicitness.)</div>
      <button onClick={addSigner}>Add Signatory</button>
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
          </div>

        



        ))}
      </div>
    </>
  );
};

export default Signatories;