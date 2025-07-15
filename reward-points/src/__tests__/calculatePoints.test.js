import { render } from '@testing-library/react';
import calculatePoints from '../utils/calculatePoints';

test('calculatePoints returns 90 for $120', () => {
  render(<calculatePoints />);
  expect(calculatePoints(120)).toBe(90);
});
