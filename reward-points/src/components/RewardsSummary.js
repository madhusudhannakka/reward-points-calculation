import React from 'react';
import calculatePoints from '../utils/calculatePoints';

const RewardsSummary = ({ transactions }) => {
  const monthly = {};
  transactions.forEach(({ amount, date }) => {
    const month = new Date(date).toLocaleString('default', { month: 'short', year: 'numeric' });
    const pts = calculatePoints(amount);
    monthly[month] = (monthly[month] || 0) + pts;
  });

  const total = Object.values(monthly).reduce((a, b) => a + b, 0);

  return (
    <div>
      <h3>Monthly Reward Points</h3>
      <ul>
        {Object.entries(monthly).map(([month, points]) => (
          <li key={month}>{month}: {points} pts</li>
        ))}
      </ul>
      <strong>Total: {total} pts</strong>
    </div>
  );
};

export default RewardsSummary;
