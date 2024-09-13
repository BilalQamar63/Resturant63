// import React from 'react'

// const Contact = () => {
//   return (
//     <section className='contact' id='contact'>
//         <h1 className='heading'>
//             Contact <span>US</span>
//         </h1>
//         <div className="row">
//         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7230.086982384848!2d67.11970461833296!3d25.032598084915204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb347134ca7a01d%3A0x7d26091e15924942!2sAl%20Ghaffar%20Restaurant%20and%20Catering%20Services!5e0!3m2!1sen!2s!4v1726155429775!5m2!1sen!2s" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//         </div>

      
//     </section>
//   )
// }

// export default Contact


import React from 'react';

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <h1 className='heading'>
        Contact <span>US</span>
      </h1>
      <div className="row">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7230.086982384848!2d67.11970461833296!3d25.032598084915204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb347134ca7a01d%3A0x7d26091e15924942!2sAl%20Ghaffar%20Restaurant%20and%20Catering%20Services!5e0!3m2!1sen!2s!4v1726155429775!5m2!1sen!2s" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <form>
        <h3>get in touch</h3>
        <div className="inputBox">
            <span className="fas fa-user"></span>
            <input type="text" placeholder='Enter Your Name' />
        </div>
        <div className="inputBox">
            <span className="fas fa-envelope"></span>
            <input type="email" placeholder='Enter Your Email' />
        </div>
        <div className="inputBox">
            <span className="fas fa-phone"></span>
            <input type="number" placeholder='Enter Your Number' />
        </div>
        <input type="submit"  value='Contact Now'className='btn' />
      </form>
      </div>
    </section>
  );
}

export default Contact;
