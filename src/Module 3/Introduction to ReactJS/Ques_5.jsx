import React from 'react';
import PropTypes from 'prop-types';

function Profile({ name, age }) {
  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

// ✅ Add prop-type validation for better reliability
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default Profile;