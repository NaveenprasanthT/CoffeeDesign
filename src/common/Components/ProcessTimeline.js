import React from "react";
import "./styles/ProcessTimeline.css";
import SectionProcessLine from "../../assets/image/Section → work-process-line.png.svg";
const steps = [
  {
    step: "Step 1",
    title: "Idea Generation",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Cras Gravida At At Uma Vulputate Ut",
    className: "step1",
  },
  {
    step: "Step 2",
    title: "Research",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Cras Gravida At At Uma Vulputate Ut",
    active: true,
    className: "step2",
  },
  {
    step: "Step 3",
    title: "Design",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Cras Gravida At At Uma Vulputate Ut",
    className: "step3",
  },
  {
    step: "Step 4",
    title: "Launch",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Cras Gravida At At Uma Vulputate Ut",
    className: "step4",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="timeline" aria-label="Process timeline">
      {/* Decorative dashed line (hidden on small screens) */}

      <img className="dashed" src={SectionProcessLine} alt="" />
      <h2 className="sr-only">Our 4-step process</h2>

      <div className="cards" role="list">
        {steps.map((s, i) => (
          <article
            key={i}
            role="listitem"
            className={`card ${s.className} ${s.active ? "active" : ""}`}
          >
            <p className="stepLabel">{s.step}</p>
            <h3 className="title">{s.title}</h3>
            <p className="desc">{s.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
