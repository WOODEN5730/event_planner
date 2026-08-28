import React from 'react'; 
import '../App.css'
const Footer = () => {

    return ( 
    <> 
  <footer>
  <div class="footer-section">
    <p>&copy; 2026 Michael Wooden</p>
  </div>

  <div class="footer-section">
    <p>Built with <strong>Vite and React and semantic HTML</strong></p>
  </div>
  
    <div class="footer-section">
    <h3>Follow me:</h3>
    <div class="social-links">   
      <a href="https://www.linkedin.com/in/michael-wooden-165a7411b/" target="_blank">
       <img src="./src/linkedin.png" alt="Linkedin" />
      </a>      
      <a href="https://www.facebook.com" target="_blank">
        <img src="./src/facebook-logo.png" alt="Facebook" /> 
      </a>
       <a href="https://x.com/" target="_blank">
        <img src="./src/twitter.png" alt="Twitter" />
       </a>
       <a href="https://www.youtube.com" target="_blank">
        <img src="./src/youtube.png" alt="YouTube" />
    </a>
     </div>
  </div>
  <div class="column">
      <h3>Contact</h3>
      <p>Email: wooden5730@msn.com</p>
      <p>Location: Philadelphia, PA</p>
    </div>

  <p class="legal">
    © 2026 Michael Wooden <br />
    © Event Planner Organization. All rights reserved.
  </p>
</footer>
    </> 
    )
}

export default Footer