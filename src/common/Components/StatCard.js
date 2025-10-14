import "../../pages/Home/Components/styles/header-section.css"; 
import PropTypes from "prop-types";

export function StatCard({ value, label }) {
  return (
    <div className="stat-card" role="group" aria-label={label}>
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

StatCard.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
