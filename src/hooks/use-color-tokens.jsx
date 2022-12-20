import { useContext, useState } from "react";

import colorTokens from "../styles/color-tokens";

export const useColorTokens = () => {
  const [availableTokens, setAvailableTokens] = useState(colorTokens);
  
  const addNewAvailableOption = (newTokens, tokensName) => {
    setAvailableTokens({
      ...availableTokens,
      [tokensName]: newTokens,
    });
  };

  const getTokens = (paletteName, mode) => availableTokens[paletteName][mode];

  return {
    getTokens,
    availableTokens,
    addNewAvailableOption,
  };
};
