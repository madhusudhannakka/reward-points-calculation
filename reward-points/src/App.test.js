import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders with correct header here', () => {
    render(<App />);
    const retailHeader = screen.getByText(/Retail Reward Dashboard/i);
    const loadingText = screen.getByText(/Loading.../i);
    expect(retailHeader).toBeInTheDocument();
    expect(loadingText).toBeInTheDocument();
  });
});