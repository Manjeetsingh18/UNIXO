import 'react-native';
import React from 'react';
import Login from '.';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly across screens', () => {
  const login = renderer.create(<Login />);
  expect(login).toMatchSnapshot();
});
