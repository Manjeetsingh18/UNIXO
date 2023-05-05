import 'react-native';
import React from 'react';
import Button from '.';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly across screens', () => {
  const button = renderer.create(<Button />).toJSON();
  expect(button).toMatchSnapshot();
});
