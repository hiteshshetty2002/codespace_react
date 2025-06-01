import React from 'react';
import PropTypes from 'prop-types';

function Profile({ name, age }) {
  const isValidAge = age >= 0 && age <= 120;

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {name || "Name not provided"}</p>
      {isValidAge ? (
        <p>Age: {age}</p>
      ) : (
        <p style={{ color: 'red' }}>Invalid age provided</p>
      )}
    </div>
  );
}

// ✅ Prop type validation
Profile.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

// ✅ Default props to prevent undefined/null issues
Profile.defaultProps = {
  name: "Guest",
  age: 0,
};

export default Profile;