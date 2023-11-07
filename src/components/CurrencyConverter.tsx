import { TextField } from "@mui/material";
import React, { useState } from "react";

const CurrencyConverter: React.FC = () => {
  const [usdValue, setUsdValue] = useState<number | string>(1892);
  const [etherValue, setEtherValue] = useState<number | string>(1);

  const handleUsdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setUsdValue(inputValue);
    if (inputValue === "" || isNaN(parseFloat(inputValue))) {
      setEtherValue("");
      setUsdValue("");
    } else {
      setEtherValue(parseFloat(inputValue) / 1892);
    }
  };

  const handleEtherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setEtherValue(inputValue);
    if (inputValue === "" || isNaN(parseFloat(inputValue))) {
      setUsdValue("");
      setEtherValue("");
    } else {
      setUsdValue(parseFloat(inputValue) * 1892);
    }
  };

  const inputStyles = {
    input: {
      color: "white",
    },
  };
  const labelStyles = {
    root: {
      color: "white",
      "&.MuiFocused": {
        color: "white",
      },
      fontSize: "20px",
    },
  };

  return (
    <div>
      <div>
        <TextField
          label="USD"
          value={usdValue}
          onChange={handleUsdChange}
          variant="outlined"
          margin="normal"
          inputProps={{ style: inputStyles.input }}
          InputLabelProps={{ style: labelStyles.root, shrink: true }}
        />
      </div>
      <div>
        <TextField
          label="ETH"
          value={etherValue}
          onChange={handleEtherChange}
          variant="outlined"
          margin="normal"
          inputProps={{ style: inputStyles.input }}
          InputLabelProps={{ style: labelStyles.root, shrink: true }}
        />
      </div>
    </div>
  );
};

export default CurrencyConverter;
