import React, { useState } from "react";
import {useFirebase} from "../context/Firebase";

const GenerateIDComponent = () => {
  const firebase=useFirebase();
  const [numberInput1, setNumberInput1] = useState("");
  const [textInput, setTextInput] = useState("");
  const [numberInput3, setNumberInput3] = useState("");
  const [generatedID, setGeneratedID] = useState(""); // State to hold the generated ID
  const [palakName, setpalakName] = useState(""); // State for mapping input
  const [otherInfo, setotherInfo] = useState(""); // State for no mapping input
  

  const handleSubmit=async(e)=>{
    e.preventDefault();
    await firebase.handleCreateNewListing2(generatedID, palakName, otherInfo);
};
  
  const handleGenerateID = () => {
    const id = `${numberInput1}${textInput}${numberInput3}`;
    setGeneratedID(id); // Update the generated ID in the state
  };

  const handleFeedData = (e) => {
   
    handleSubmit(e);
    handleGenerateID();
  };

  return (
    <div className="generate-id-container">
      <div className="input-container">
        <label>Enter Sector Number</label>
        <input
          type="number"
          value={numberInput1}
          onChange={(e) => setNumberInput1(e.target.value)}
          placeholder="Enter a number"
        />
      </div>

      <div className="input-container">
        <label>Enter Tree Name</label>
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Enter some text"
        />
      </div>

      <div className="input-container">
        <label>Enter Tree Number</label>
        <input
          type="number"
          value={numberInput3}
          onChange={(e) => setNumberInput3(e.target.value)}
          placeholder="Enter another number"
        />
      </div>
      <div className="input-container">
        <label>Palak's Name</label>
        <input
          type="text"
          value={palakName}
          onChange={(e) => setpalakName(e.target.value)}
          placeholder="Enter palak's name"
        />
      </div>
      <div className="input-container">
        <label>Enter Other Info</label>
        <input
          type="text"
          value={otherInfo}
          onChange={(e) => setotherInfo(e.target.value)}
          placeholder="Enter other information"
        />
      </div>

      <div>
      {/* ... Your other component JSX */}
      <div className="button-container">
        <button onClick={handleGenerateID}>Generate ID</button>
        <button onClick={handleFeedData}>Feed Data</button>
        
      </div>
    </div>

      {/* Display the generated ID */}
      {generatedID && (
        <div>
        <div className="generated-id">
          Generated ID: <span>{generatedID}</span>
        </div>
        <div className="generated-id">
          Palak's Name: <span>{palakName}</span>
        </div>
        <div className="generated-id">
          Other Info: <span>{otherInfo}</span>
        </div>
        </div>
      )}
    </div>
  );
};

export default GenerateIDComponent;