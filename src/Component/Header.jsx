import React from 'react'

const Header = () => {
  return (
    <>
   <header>
   <div className="header">
    <video controls autoplay muted loop>
   <source   src="/src/media-img/814dc43e870597176cad645798825c03.mp4"  type="video/mp4"/>
    </video>
    <div className="content">
    <h1>nomad force</h1>
    <p>create a great video for your  <span>website</span></p>
    </div> 
    </div>
    <div className="page">
      <h2>Nomad Force</h2>
      <div className="nomad">
        <span>Home</span>
        <span>Our studio</span>
        <span>Portifoli</span>
        <span>New&Events</span>
        <span>Contant Us</span>
        </div>
        </div>
   </header>
    </>
  )
}

export default Header