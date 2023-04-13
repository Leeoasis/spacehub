import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import '../styles/App.css';

export default function MyProfile() {
  // const rockets = useSelector((state) => state.rocket);
  const missions = useSelector((state) => state.mission);
  // const reservedRockets = rockets.filter((rc) => rc.reserved);
  const joinedMissions = missions.filter((mis) => mis.reserved);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h2>My Missions</h2>
          <Table bordered>
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
          <Table bordered>
            <thead>
              <tr>
                <td>No Rockets Reserved</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rocket Name</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
