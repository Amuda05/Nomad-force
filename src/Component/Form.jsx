import React from 'react'

const Form = () => {
  return (
    <>
    <div className="form">
        <p>Dont' be shy, write to us</p>
    </div>

    <div className="forms">
        <form action="">
            <div className="input">
                <div className="in">
                <label>Name<span>*</span></label>
                <br />
                <input type="text"  placeholder='Full name'/>
                </div>
                <div className="in">
                <label>Email<span>*</span></label>
                <br />
                <input type="email" placeholder='Email-address'/>
                </div>
               
            </div>

            <div className="textarea">
                <label>How can we help?</label>
                <br />
                <textarea  id="" cols="30" rows="10"  placeholder='Tell Us about the Project'></textarea>
            </div>

            <div className="service">
                <p id='seve'>Service</p>
                   <p>
                    <input type="checkbox" checked="checked" /> 
                   Branding
                   </p>
                    <p> 
                    <input type="checkbox" checked="checked" />
                    Digital Experiences
                    </p>
                <p>
                <input type="checkbox"checked="checked" />
                Web Development
                </p>

                <button id='btn'>Send</button>
                <p id='info'>
                info@company.com
                </p>
                <p id='num'>6100 Your address here</p>
                <p id='pa'>Palo Alto, CA</p>
           
           <div className="app">
            <a href="https://www.facebook.com/home">
            <img src="/src/media-img/facebook.jpg" alt="facebook" />
            </a>
           <a href="https://twitter.com/home">
           <img src="/src/media-img/twitter.png" alt="twitter" />
           </a>
            
             <a href="https://www.linkedin.com/home">
             <img src="/src/media-img/linkdlin.svg" alt="linkdein" />
             </a>
           </div>
    
            </div>


        </form>
    </div>
    </>
  )
}

export default Form