import React from "react";

function About() {
  return (
    <section className="about">
      <div className="container">
        <h2>About This Website</h2>
        <p>
          This website was created to amplify the voices of those fighting
          against anti-transgender legislation. We believe in a world where all
          individuals, regardless of gender identity, are treated with dignity
          and respect.
        </p>
        <p>
          We are committed to providing information, resources, and a platform
          for action to support the transgender community.
        </p>
      </div>

      <div className="image-attribution">
        <p>
          Photo by{" "}
          <a href="https://unsplash.com/@lena_balk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Lena Balk
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/8HYUVhTr6qs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </p>
      </div>
    </section>
  );
}

export default About;