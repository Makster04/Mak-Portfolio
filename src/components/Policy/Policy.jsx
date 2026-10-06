import React from "react";
import policyData from "./PolicyData";
import "./Policy.css";

const Policy = () => {
  return (
    <div className="policy">
      <h1 className="policy-title">
        <span className="policy-title-main">My Policy</span> <span className="policy-title-highlight">RESEARCH</span>
      </h1>
      <p className="policy-description">
        Position papers and policy memos I wrote as a Political Science and International Studies student at the University of Washington, representing Croatia in Model EU simulations and Burkina Faso in a Model UN committee
      </p>
      <div className="policy-cards">
        {policyData.map((data) => (
          <article className="policy-card" key={data.title}>
            <header className="policy-card-header">
              <span className="policy-forum">{data.forum}</span>
              <span className="policy-context">
                {[data.context, data.date].filter(Boolean).join(" · ")}
              </span>
            </header>
            <div className="policy-card-body">
              <h2>{data.title}</h2>
              <p className="policy-about">{data.about}</p>
              <ul className="policy-highlights">
                {data.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <ul className="policy-tags">
                {data.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <p className="policy-read-more">
                <a href={data.paperLink} target="_blank" rel="noopener noreferrer">Read Paper (PDF)</a>
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Policy;
