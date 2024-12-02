import React from "react";

function GetInvolved() {
  return (
    <section className="get-involved">
      <div className="container">
        <h2>Get Involved</h2>
        <p>
          Your voice matters! Here's how you can take action and support the
          fight for transgender rights:
        </p>
        <ul>
          <li>
            <b>Donate:</b> Support organizations that are working to protect
            transgender rights.
            <ul>
              <li>
                <a
                  href="https://transequality.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Transgender Equality
                </a>
              </li>
              <li>
                <a
                  href="https://www.glaad.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GLAAD
                </a>
              </li>
              {/* Add more organizations */}
            </ul>
          </li>
          <li>
            <b>Contact your representatives:</b> Make your voice heard by
            contacting your elected officials.
            <ul>
              <li>
                Find your representatives:{" "}
                <a
                  href="https://www.usa.gov/elected-officials"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  usa.gov
                </a>
              </li>
              {/* Add more resources */}
            </ul>
          </li>
          <li>
            <b>Educate yourself and others:</b> Learn more about transgender
            issues and share information with your friends and family.
            <ul>
              <li>
                <a
                  href="https://www.hrc.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Human Rights Campaign
                </a>
              </li>
              {/* Add more resources */}
            </ul>
          </li>
          <li>
            <b>Participate in events:</b> Join rallies, protests, and other
            events to show your support.
            {/* Add resources for finding events */}
          </li>
        </ul>
      </div>

      <div className="image-attribution">
        <p>
          Photo by{" "}
          <a href="https://unsplash.com/@christinnoelle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Christian Lue
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/woman-in-blue-shirt-holding-blue-and-white-happy-birthday-signage-pSgO9pMVVUI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </p>
      </div>
    </section>
  );
}

export default GetInvolved;