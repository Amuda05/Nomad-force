import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="location">
          <img src="/src/media-img/location.png" alt="" />
          <span>Burgas, Bulgaria</span>
        </div>
        <div className="text">
          <p>This is example text. Click here to edit it.</p>
          <p id='copyright'>© All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer