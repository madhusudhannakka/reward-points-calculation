import React from 'react';
import calculatePoints from '../utils/calculatePoints';

const TransactionList = ({ transactions, selectedMonth }) => {
  const filtered = transactions.filter(t => {
    const date = new Date(t.date);
    return date.getMonth() === selectedMonth;
  });

  return (
    <div>
      <h3>Transactions for Selected Month</h3>
      {filtered.length === 0 ? <p>No transactions.</p> :
        <ul>
          {filtered.map(t => (
            <li key={t.transactionId}>
              {t.date} - ${t.amount} → {calculatePoints(t.amount)} pts
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default TransactionList;
