import React from 'react';
import { render, screen } from '@testing-library/react';
import TransactionList from '../components/TransactionList';
import * as utils from '../utils/calculatePoints'; // for mocking

describe('TransactionList Component', () => {
  const mockTransactions = [
    { transactionId: 'T1', amount: 120, date: '2025-05-05' }, // May
    { transactionId: 'T2', amount: 90, date: '2025-05-20' },  // May
    { transactionId: 'T3', amount: 40, date: '2025-06-01' },  // June
  ];

  test('renders correct transactions for selected month', () => {
    render(<TransactionList transactions={mockTransactions} selectedMonth={4} />); // 4 = May

    expect(screen.getByText(/Transactions for Selected Month/i)).toBeInTheDocument();
    expect(screen.getByText(/2025-05-05 - \$120/i)).toBeInTheDocument();
    expect(screen.getByText(/2025-05-20 - \$90/i)).toBeInTheDocument();

    // Should NOT render June transaction
    expect(screen.queryByText(/2025-06-01/)).not.toBeInTheDocument();
  });

  test('shows "No transactions" message for empty month', () => {
    render(<TransactionList transactions={mockTransactions} selectedMonth={0} />); // 0 = Jan

    expect(screen.getByText('No transactions.')).toBeInTheDocument();
  });

  test('calculates points using CalculatePoints function', () => {
    const spy = jest.spyOn(utils, 'default'); // Mock the default export
    render(<TransactionList transactions={mockTransactions} selectedMonth={4} />);

    expect(spy).toHaveBeenCalledWith(120);
    expect(spy).toHaveBeenCalledWith(90);
    expect(spy).not.toHaveBeenCalledWith(40); // Not selected month
    spy.mockRestore();
  });
});
