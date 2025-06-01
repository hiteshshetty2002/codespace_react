
import React from 'react';
import PropTypes from 'prop-types';

function LoginMessage({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome back, user!</h2>
      ) : (
        <h2>Please log in to continue.</h2>
      )}
    </div>
  );
}

// ✅ Prop validation
LoginMessage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default LoginMessage;