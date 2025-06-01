import React from 'react';

function CurrentYear() {
  const year = new Date().getFullYear();
  return <p>The current year is {year}</p>;
}

export default CurrentYear;


