import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket, onReserveClick }) => (
  <div className="Rocket-Card">
    <div className="Rocket-Images">
      {rocket.flickr_images && rocket.flickr_images.length > 0 && (
        <img src={rocket.flickr_images[0]} alt={`Rocket ${rocket.rocket_name}`} />
      )}
    </div>
    <div>
      <h2>{rocket.rocket_name}</h2>
      <p>
        <span className="Reserved-Text">{rocket.reserved ? 'Reserved' : 'Not reserved'}</span>
        {rocket.description}
      </p>
      <button className="Reserve-Button" type="button" onClick={() => onReserveClick(rocket.id)}>Reserve Rocket</button>
      <br />
      <button className="Cancel-Reservation" type="button">Cancel Reservation</button>
    </div>
  </div>
);

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string),
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
  onReserveClick: PropTypes.func.isRequired,
};

export default Rocket;
