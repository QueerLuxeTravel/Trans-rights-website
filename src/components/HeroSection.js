import React, { useEffect, useRef } from "react";
import { Howl } from "howler";
import "../styles.css";

function HeroSection() {
  const sound = useRef(null);

  useEffect(() => {
    sound.current = new Howl({
      src: ["/octavia_speech.mp3"],
      html5: true,
    });

    return () => {
      if (sound.current) {
        sound.current.unload();
      }
    };
  }, []);

  useEffect(() => {
    let timeoutId;

    if (sound.current) {
      sound.current.on("play", () => {
        // Change to anger state after 5 seconds
        timeoutId = setTimeout(() => {
          document.querySelector(".hero").classList.add("anger");
        }, 5000);

        // Change to sadness state after 15 seconds
        timeoutId = setTimeout(() => {
          document.querySelector(".hero").classList.remove("anger");
          document.querySelector(".hero").classList.add("sadness");
        }, 15000);

        // Change to hope state after 25 seconds
        timeoutId = setTimeout(() => {
          document.querySelector(".hero").classList.remove("sadness");
          document.querySelector(".hero").classList.add("hope");
        }, 25000);

        // Highlight "transgender rights" after 10 seconds
        timeoutId = setTimeout(() => {
          document
            .querySelector(".emphasis")
            .classList.add("highlight");
        }, 10000);

        // Start pulsating effect on the heading after 12 seconds
        timeoutId = setTimeout(() => {
          document.querySelector(".hero h1").style.animation =
            "pulse 2s infinite";
        }, 12000);

        // ... Add more timed events to match the speech ...
      });

      sound.current.on("end", () => {
        clearTimeout(timeoutId);
        document
          .querySelector(".hero")
          .classList.remove("anger", "sadness", "hope");
        document
          .querySelector(".emphasis")
          .classList.remove("highlight");
        document.querySelector(".hero h1").style.animation = "none"; // Stop pulsating
      });
    }

    return () => clearTimeout(timeoutId);
  }, []);

  const handlePlay = () => {
    if (sound.current) {
      sound.current.play();
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>We Will Not Be Silenced</h1>
        <p>
          Join the fight for{" "}
          <span className="emphasis">transgender rights</span>.
        </p>
        <button onClick={handlePlay}>Play Speech</button>
      </div>

      <div className="image-attribution">
        <p>
          Photo by{" "}
          <a href="https://unsplash.com/@alexandergrey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Alexander Grey
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/portrait-of-a-40-year-old-person-that-identifies-as-gender-queer-non-binary-npPyiSoFAIo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </p>
      </div>
    </section>
  );
}

export default HeroSection;