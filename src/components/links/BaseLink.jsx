import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

function BaseLink({ children, content, classes, pageLink }) {
  return (
    <Link to={pageLink} className={`cursor-pointer no-underline ${classes}`}>
      {content || children}
    </Link>
  );
}

BaseLink.propTypes = {
  children: PropTypes.node,
  content: PropTypes.string,
  classes: PropTypes.string,
};

export default BaseLink;
