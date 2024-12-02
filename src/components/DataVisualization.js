import React from "react";

function DataVisualization() {
  return (
    <section className="data-visualization">
      <div className="container">
        <h2>Interactive Map of Anti-Trans Legislation</h2>
        <iframe
          src="https://translegislation.com/map"
          title="Trans Legislation Map"
          width="100%"
          height="600px"
          style={{ border: "none" }}
        />
        <p className="source">
          Source:{" "}
          <a
            href="https://translegislation.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            translegislation.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default DataVisualization;