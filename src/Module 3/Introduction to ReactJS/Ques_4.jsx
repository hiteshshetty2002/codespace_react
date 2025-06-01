import React from 'react';
import PropTypes from 'prop-types';

function Error({ imageSrc }) {
  return (
    <div>
      <h1>Properly Closed Tags</h1>
      <p>
        Self-closing tag example: <img src={imageSrc} alt="Example" />
      </p>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
    </div>
  );
}

// ✅ Add PropTypes for validation
Error.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default Error;

