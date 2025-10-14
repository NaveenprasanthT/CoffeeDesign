import React from "react";
import ServicesImages from "../../../assets/image/services-images.jpg";
import { ServiceCard } from "../../../common/Components/ServiceCard";
import "./Styles/service-card-pages.css";
import { ReactComponent as WorkFormIcon } from "../../../assets/work-form-icon.svg";
import ProcessTimeline from "../../../common/Components/ProcessTimeline";

function ServiceCardPages() {
  return (
    <>
      {" "}
      <div className="services-card-pages-main">
        <img
          className="services-card-pages-images"
          src={ServicesImages}
          alt=""
        />
        <div className="services-card-development">
          <div>
            {" "}
            <ServiceCard
              number={"01"}
              title={"Web Development"}
              description="At vero eos et accusamus et iusto odio dignissimos ducimus quie blanditiis
      praesentium voluptatum delenit corruptie"
            />
            <ServiceCard
              number={"02"}
              title={"Web Development"}
              description="At vero eos et accusamus et iusto odio dignissimos ducimus quie blanditiis
      praesentium voluptatum delenit corruptie"
            />{" "}
            <ServiceCard
              number={"03"}
              title={"Web Development"}
              description="At vero eos et accusamus et iusto odio dignissimos ducimus quie blanditiis
      praesentium voluptatum delenit corruptie"
            />{" "}
          </div>
          <div>
            {" "}
            <ServiceCard
              number={"04"}
              title={"Web Development"}
              description="At vero eos et accusamus et iusto odio dignissimos ducimus quie blanditiis
      praesentium voluptatum delenit corruptie"
            />{" "}
            <ServiceCard
              number={"03"}
              title={"Web Development"}
              description="At vero eos et accusamus et iusto odio dignissimos ducimus quie blanditiis
      praesentium voluptatum delenit corruptie"
            />{" "}
            <ServiceCard
              number={"04"}
              title={"Web Development"}
              description="At vero eos et accusamus et iusto odio dignissimos ducimus quie blanditiis
      praesentium voluptatum delenit corruptie"
            />{" "}
          </div>
        </div>
      </div>
      <section aria-label="Our pillars" className="pillars-section">
        <div className="pillars-container">
          <div className="pillars-flex">
            <h3 className="pillars-title">Research</h3>

            <WorkFormIcon />
            <h3 className="pillars-title">Collaborate</h3>

            <WorkFormIcon />

            <h3 className="pillars-title">Build</h3>
          </div>
        </div>
      </section>
      <ProcessTimeline/>
    </>
  );
}

export default ServiceCardPages;
