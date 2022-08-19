import React, { useState } from "react";
import PropTypes from "prop-types";

function Collapsible(props) {
  const [isCollapsed, setIsCollased] = useState(true);

  const handleCollapse = (props) => {
    setIsCollased(!isCollapsed);
  };

  return (
    <div className="collapsible-container mx-auto">
      <button className="btn btn-primary" onClick={() => handleCollapse()}>
        {isCollapsed ? props.collapsedLabel : props.expandedLabel}
      </button>
      <div
        className={`collapsible-content ${
          isCollapsed ? "collapsible-collapsed" : "collapsible-expanded"
        }`}
      >
        {props.children}
      </div>
    </div>
  );
}

Collapsible.defaultProps = {
  collapsedLabel: "Развернуть",
  expandedLabel: "Свернуть",
};

Collapsible.propTypes = {
  collapsedLabel: PropTypes.string,
  expandedLabel: PropTypes.string,
};

export default Collapsible;
