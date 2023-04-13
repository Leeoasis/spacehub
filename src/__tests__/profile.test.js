import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import MyProfile from '../components/profile';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('MyProfile', () => {
  beforeEach(() => {
    useSelector.mockClear();
  });

  test('renders "No Missions Joined" if joinedMissions is empty', () => {
    useSelector.mockReturnValueOnce([]);
    useSelector.mockReturnValueOnce([]);

    render(<MyProfile />);

    expect(screen.getByText('No Missions Joined')).toBeInTheDocument();
  });

  test('renders "No Rockets Reserved" if reservedRockets is empty', () => {
    useSelector.mockReturnValueOnce([]);
    useSelector.mockReturnValueOnce([]);

    render(<MyProfile />);

    expect(screen.getByText('No Rockets Reserved')).toBeInTheDocument();
  });

  test('renders joined missions', () => {
    const mockMission = {
      mission_id: '1',
      mission_name: 'Mission 1',
      reserved: true,
    };
    useSelector.mockReturnValueOnce([mockMission]);
    useSelector.mockReturnValueOnce([]);

    render(<MyProfile />);

    expect(screen.getByText('My Missions')).toBeInTheDocument();
    expect(screen.getByText('Mission 1')).toBeInTheDocument();
  });

  test('renders reserved rockets', () => {
    const mockRocket = {
      id: '1',
      name: 'Rocket 1',
      reserved: true,
    };
    useSelector.mockReturnValueOnce([]);
    useSelector.mockReturnValueOnce([mockRocket]);

    render(<MyProfile />);

    expect(screen.getByText('My Rockets')).toBeInTheDocument();
    expect(screen.getByText('Rocket 1')).toBeInTheDocument();
  });
});
