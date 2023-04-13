import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import '../styles/App.css';

export default function MyProfile() {
  // const rockets = useSelector((state) => state.rocket);
  const missions = useSelector((state) => state.mission);
  const rockets = useSelector((state) => state.rockets.rockets);
  // const reservedRockets = rockets.filter((rc) => rc.reserved);
  const joinedMissions = missions.filter((mis) => mis.reserved);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h2 className="left">My Missions</h2>
          <Table className="profile-table left">
            <thead>
              <tr>
                {joinedMissions.length === 0 && (
                  <td>No Missions Joined</td>
                )}
              </tr>
            </thead>
            <tbody>
              {joinedMissions.map((mission) => (
                <tr key={mission.mission_id}>
                  <td>{mission.mission_name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="col-6">
          <h2>My Rockets</h2>
          <Table className="profile-table">
            <thead>
              <tr>
                {reservedRockets.length === 0 && (
                <td>No Rockets Reserved</td>
                )}
              </tr>
            </thead>
            <tbody>
              {reservedRockets.map((rockets) => (
                <tr key={rockets.id}>
                  <td>{rockets.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
