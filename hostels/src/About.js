import React from 'react';
import './About.css';
// import img1 from './instagram-logo-1.png';
// import img2 from './twitter_logo_1.jpg';
// import img3 from './youtube logo.jpg';
// import img4 from './facebook logo.jpg';
// import img5 from './phone_logo1.jpg';
// import img6 from './mail_logo.jpg';
// import img7 from './library.jpg';
// import img8 from './gym.jpg.webp';
// import img9 from './discussion_rooms.jpg';
// import img10 from './cafe.jpg';
function About() {
  return (
    
    <div>
      <body>
  <header>
    <h1>About Us</h1>
  </header>
  <br/>
  <main>
    <section>
      <h2>About the College</h2>
      <p className='college1'>Shri Vishnu Engineering College for Women is a was founded by Sri Vishnu Educational Society in 2001. The college is affiliated to 
      Jawaharlal Nehru Technological University (JNTU), Kakinada since 2011 and was accredited in 2008 by NBA for 5 years. The college offers Bachelor and Master Courses in various field of Technology

      </p>
      <p className='college2'>Shri Vishnu Engineering College for Women is known for its state-of-the-art infrastructure, well-equipped laboratories, and a dedicated faculty that ensures a holistic learning experience for its students. The institution also encourages participation in co-curricular and extracurricular activities, fostering the overall development of its students.

      </p>
    </section>
    <section>
      <h2>Facilities</h2>
      <ul>
      {/* <img src={img7} alt="library" width="253" height="300"/>
      <img src={img8} alt="library" width="253" height="300"/>
      <img src={img9} alt="library" width="253" height="300"/>
      <img src={img10} alt="library" width="253" height="300"/> */}
      </ul>
    </section>
    <section>
      <h2>Social Media</h2>
      <a href="https://www.instagram.com/vishnu_society_bhimavaram" target="_blank">
        {/* <img src={img1}width="50" height="50"/> */}
    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://www.twitter.com/your_username" target="_blank">
        {/* <img src={img2} alt="Twitter" width="50" height="50"/> */}
    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://www.youtube.com/c/VishnuSociety" target="_blank">
        {/* <img src={img3} alt="Youtube" width="70" height="70"/> */}
    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://www.facebook.com/shrivishnueducationalsociety" target="_blank">
        {/* <img src={img4} alt="Facebook" width="50" height="50"/> */}
    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </section>
    <section>
      <h2>Contact Information</h2>
      
      {/* <p><img src={img5} alt="phone" width="30" height="30"/>:(555) 555-5555</p>
    
      <p> <img src={img6} alt="Facebook" width="30" height="30"/>:info@svecw.edu.in</p> */}
    </section>
  </main>
  <footer>
    &copy; 2023 Shri Vishnu Engineering College for Women
  </footer>
</body>

            
    </div>
  );
}
export default About;