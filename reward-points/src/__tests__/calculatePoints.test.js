import { render } from '@testing-library/react';
import CalculatePoints from '../utils/calculatePoints';

describe('CalculatePoints Component', () => {
  test('calculatePoints returns 90 for $120', () => {
    render(<CalculatePoints />);
    expect(CalculatePoints(120)).toBe(90);
  });
});


