import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const EthreumDiff: React.FC = () => {
  const [ethereumValue, setEthereumValue] = useState(1892); // Initial value

  // Simulate value changes with a useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      const randomChange = Math.floor(Math.random() * 200 - 100); // Generate random value change
      setEthereumValue((prevValue) => prevValue + randomChange);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const isIncrease = ethereumValue > 1892;

  return (
    <div className="header">
      <img src={logo} alt="logo" width="50px" />
      <h3>
        Ethereum Value: {ethereumValue}
        {isIncrease ? (
          <span style={{ color: "green" }}> &#9650;</span>
        ) : (
          <span style={{ color: "red" }}> &#9660;</span>
        )}
      </h3>
    </div>
  );
};

export default EthreumDiff;
