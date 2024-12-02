import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2023 Trans Rights Advocacy</p>
        <ul className="social-links">
          <li>
            <a
              href="https://twitter.com/your-twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          {/* Add other social media links */}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;