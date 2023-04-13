import React from 'react';
import renderer from 'react-test-renderer';
import Rocket from '../components/rockets';

describe('Rocket component', () => {
  const rocket = {
    id: 'falcon1',
    name: 'Falcon 1',
    description: 'Small launch vehicle',
    flickr_images: ['https://www.example.com/falcon1.jpg'],
    reserved: true,
  };

  it('renders correctly when rocket is reserved', () => {
    const tree = renderer
      .create(<Rocket rocket={rocket} handleReserveClick={() => {}} onCancelClick={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when rocket is not reserved', () => {
    const newRocket = { ...rocket, reserved: false };
    const tree = renderer
      .create(<Rocket rocket={newRocket} handleReserveClick={() => {}} onCancelClick={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
