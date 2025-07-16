import React from 'react';
import { render, screen } from '@testing-library/react';
import RewardsSummary from '../components/RewardsSummary';
import * as utils from '../utils/calculatePoints'; // for mocking

describe('RewardsSummary component', () => {
  const mockTransactions = [
    { amount: 120, date: '2025-05-01' }, // 90 pts
    { amount: 80, date: '2025-05-15' },  // 30 pts
    { amount: 45, date: '2025-06-10' }   // 0 pts
  ];

  test('renders reward summary correctly', () => {
    render(<RewardsSummary transactions={mockTransactions} />);

    expect(screen.getByText('Monthly Reward Points')).toBeInTheDocument();
    expect(screen.getByText(/May 2025: 120 pts/i)).toBeInTheDocument();
    expect(screen.getByText(/Jun 2025: 0 pts/i)).toBeInTheDocument();
    expect(screen.getByText(/Total: 120 pts/i)).toBeInTheDocument();
  });

  test('calls CalculatePoints correctly', () => {
    const spy = jest.spyOn(utils, 'default'); // default export from calculatePoints.js
    render(<RewardsSummary transactions={mockTransactions} />);
    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenCalledWith(120);
    expect(spy).toHaveBeenCalledWith(80);
    expect(spy).toHaveBeenCalledWith(45);
    spy.mockRestore();
  });
});

