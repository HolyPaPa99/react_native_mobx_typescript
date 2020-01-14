/**
 * @format
 */

import 'react-native';
import React from 'react';
import Hello from '@/screens/hello'
import App from '../App'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

test('renders correctly', () => {
  const tree = renderer.create(<Hello />).toJSON();
  expect(tree).toMatchSnapshot();
});
