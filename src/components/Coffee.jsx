// Buy Me a coffee component
import React from 'react'

function Coffee() {
  return (
    <div className='coffee'>
      <div className="recent__works__rectangle" />
      <div className='coffee__border'>
        <h3>Would you like to support me? ☕</h3>
        <h4>You can buy me a coffee!</h4>
        <a
          className="buyButton"
          target="_blank"
          href="https://www.buymeacoffee.com/bugragulculer" rel="noreferrer"
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
  )
}

export default Coffee
