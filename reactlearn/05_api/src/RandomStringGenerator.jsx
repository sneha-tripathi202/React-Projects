import React, { useState, useCallback, useEffect } from "react";

function RandomStringGenerator() {
  const [randomString, setRandomString] = useState("");
  const [length, setLength] = useState(8);

  // useCallback ensures the function reference stays stable
  const generateString = useCallback(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setRandomString(result);
  }, [length]);

  // useEffect runs once on mount to generate an initial string
  useEffect(() => {
    generateString();
  }, [generateString]);

  return (
  
    <div className=" div" >
       <div style={{ textAlign: "center", marginTop:"200px"}}>
      <h2>Random String Generator</h2>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>{randomString}</p>
      <div>
        <label>
          Length:
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            min="1"
            max="32"
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>
      <button
        onClick={generateString}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        >
        Generate New String
      </button>
    </div>
    </div>
  );
}

export default RandomStringGenerator;
