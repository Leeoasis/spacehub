import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import MyMissions from '../components/missions';

const mockStore = configureMockStore();

describe('MyMissions component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      mission: [
        {
          mission_id: 'mission1',
          mission_name: 'Mission 1',
          description: 'Description 1',
          reserved: true,
        },
        {
          mission_id: 'mission2',
          mission_name: 'Mission 2',
          description: 'Description 2',
          reserved: false,
        },
      ],
    });
  });

  it('should render correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MyMissions />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display missions', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MyMissions />
      </Provider>,
    );
    expect(getByText('Mission 1')).toBeInTheDocument();
    expect(getByText('Mission 2')).toBeInTheDocument();
  });

  it('should show correct status for missions', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MyMissions />
      </Provider>,
    );
    expect(getByText('Active Member')).toBeInTheDocument();
    expect(getByText('NOT A MEMBER')).toBeInTheDocument();
  });

  it('should dispatch joinMission action when join button is clicked', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MyMissions />
      </Provider>,
    );
    fireEvent.click(getByText('Join Mission'));
    expect(store.getActions()).toEqual([{
      type: 'space-travelers-hub/missions/JOIN_MISSION',
      payload: {
        mission_id: 'mission2', mission_name: 'Mission 2', description: 'Description 2', reserved: false,
      },
    }]);
  });

  it('should dispatch leaveMission action when leave button is clicked', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MyMissions />
      </Provider>,
    );
    fireEvent.click(getByText('Leave Mission'));
    expect(store.getActions()).toEqual([
      {
        type: 'space-travelers-hub/missions/LEAVE_MISSION',
        payload: {
          mission_id: 'mission1',
          mission_name: 'Mission 1',
          description: 'Description 1',
          reserved: true, // add reserved property
        },
      },
    ]);
  });
});
