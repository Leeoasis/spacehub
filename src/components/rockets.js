import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => (
  <div className="Rocket-Card">
    <h2>{rocket.name}</h2>
    <p>{rocket.description}</p>
    <div className="Rocket-Images">
      {rocket.flickr_images && rocket.flickr_images.length > 0 && (
      <img src={rocket.flickr_images[0]} alt={`Rocket ${rocket.name}`} />
      )}
    </div>
  </div>
);

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Rocket;
