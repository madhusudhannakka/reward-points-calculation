import React from 'react';

const CustomerDropdown = ({ customers, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select Customer</option>
      {customers?.map((c) => (
        <option key={c.customerId} value={c.customerId}>
          {c.customerName}
        </option>
      ))}
    </select>
  );
};

export default CustomerDropdown;
