import React from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket, handleReserveClick, onCancelClick }) => (
  <section>
    <div className="Rocket-Card">
      <div className="Rocket-Images">
        {rocket.flickr_images && rocket.flickr_images.length > 0 && (
        <img src={rocket.flickr_images[0]} alt={`Rocket ${rocket.name}`} />
        )}
      </div>
      <div className="rocket-text">
        <h2 className="Rocket-Heading">{rocket.name}</h2>
        <p className="card-text">
          <span className={rocket.reserved === true ? 'show' : 'hidden'}>Reserved</span>
          {rocket.description}
        </p>
        {rocket.reserved && (
        <button
          type="button"
          className="Cancel-Reservation"
          onClick={() => onCancelClick(rocket.id)}
        >
          Cancel Reservation
        </button>
        )}
        {!rocket.reserved && (
        <button
          type="button"
          className="Reserve-Button"
          onClick={() => handleReserveClick(rocket.id)}
        >
          Reserve Rocket
        </button>
        )}
      </div>
    </div>
  </section>
);

Rocket.propTypes = {
  rocket: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleReserveClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
};

export default Rocket;
