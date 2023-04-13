import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, reserveRocket, cancelReservation } from '../redux/rocketsSlice';
import Rocket from './rockets';

const RocketList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);
  const error = useSelector((state) => state.rockets.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  const handleReserveClick = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };

  const onCancelClick = (rocketId) => {
    dispatch(cancelReservation(rocketId));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  } if (status === 'failed') {
    return <div>{error}</div>;
  }
  return (
    <div>
      <hr className="row" />
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          rocket={rocket}
          handleReserveClick={handleReserveClick}
          onCancelClick={onCancelClick}
        />
      ))}
    </div>
  );
};

export default RocketList;
