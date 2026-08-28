import React from 'react'; 
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
     <ul>
      <li><a href="#">GitHub</a></li>
      <li><a href="#">LinkedIn</a></li>
      <li><a href="#">Twitter</a></li>
     </ul>
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