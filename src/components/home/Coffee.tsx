// Buy Me a coffee component
import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";

function Coffee() {
  const theme = useSelector((state: RootStateOrAny) => state.theme);
  return (
    <div className={`coffee coffee--${theme}`}>
      <div className="purple__rectangle" />
      <div className="coffee__border">
        <h3>Would you like to support me? ☕</h3>
        <h4>You can buy me a coffee!</h4>
        <a
          className="buyButton"
          target="_blank"
          href="https://www.buymeacoffee.com/bugragulculer"
          rel="noreferrer"
        >
          <img
            className="coffeeImage"
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            alt="Buy me a coffee"
          />
          <span className="coffeeButtonText">Buy me a coffee</span>
        </a>
      </div>
    </div>
  );
}

export default Coffee;
