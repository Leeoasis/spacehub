import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import RocketList from '../components/rocketsDisplay';

const mockStore = configureMockStore();

describe('RocketList component', () => {
  it('should render loading message when status is loading', () => {
    const store = mockStore({
      rockets: {
        rockets: [],
        status: 'loading',
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <RocketList />
      </Provider>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render error message when status is failed', () => {
    const store = mockStore({
      rockets: {
        rockets: [],
        status: 'failed',
        error: 'Failed to fetch rockets',
      },
    });

    render(
      <Provider store={store}>
        <RocketList />
      </Provider>,
    );

    expect(screen.getByText('Failed to fetch rockets')).toBeInTheDocument();
  });

  it('should render rocket list when status is succeeded', async () => {
    const mockRockets = [
      { id: 'falcon-1', name: 'Falcon 1', description: 'Small launch vehicle' },
      { id: 'falcon-9', name: 'Falcon 9', description: 'Medium lift launch vehicle' },
      { id: 'falcon-heavy', name: 'Falcon Heavy', description: 'Heavy lift launch vehicle' },
    ];

    const store = mockStore({
      rockets: {
        rockets: mockRockets,
        status: 'succeeded',
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <RocketList />
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText('Falcon 1')).toBeInTheDocument();
      expect(screen.getByText('Falcon 9')).toBeInTheDocument();
      expect(screen.getByText('Falcon Heavy')).toBeInTheDocument();
    });
  });
});
