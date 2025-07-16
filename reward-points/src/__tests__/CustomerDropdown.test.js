import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomerDropdown from '../components/CustomerDropdown';

describe('CustomerDropdown Component', () => {
  const mockCustomers = [
    { customerId: '1', customerName: 'John' },
    { customerId: '2', customerName: 'Jane' },
  ];

  test('renders dropdown with all customer options', () => {
    render(<CustomerDropdown customers={mockCustomers} onSelect={() => {}} />);

    // Check for default option
    expect(screen.getByText('Select Customer')).toBeInTheDocument();

    // Check for each customer option
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
  });

  test('calls onSelect with correct value when an option is selected', () => {
    const onSelectMock = jest.fn();
    render(<CustomerDropdown customers={mockCustomers} onSelect={onSelectMock} />);

    const selectElement = screen.getByRole('combobox');

    fireEvent.change(selectElement, { target: { value: '2' } });

    expect(onSelectMock).toHaveBeenCalledWith('2');
  });
});
