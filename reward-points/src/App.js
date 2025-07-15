import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchCustomers } from './utils/api';
import CustomerDropdown from './components/CustomerDropdown';
import RewardsSummary from './components/RewardsSummary';
import TransactionList from './components/TransactionList';

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCustomers()
      .then(data => {
        setCustomers(data);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to load customers");
        setLoading(false);
      });
  }, []);

  const customer = customers?.find(c => c.customerId === selectedCustomer);

  return (
    <div className='App'>
      <h1>Retail Reward Dashboard</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!loading && (
        <>
          <CustomerDropdown customers={customers} onSelect={setSelectedCustomer} />
          <br />

          {customer && (
            <>
              <RewardsSummary transactions={customer.transactions} />
              <br />
              <label>Select Month (0=Jan): </label>
              <input
                type="number"
                min="0"
                max="11"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(Number(e.target.value))}
              />
              <TransactionList
                transactions={customer.transactions}
                selectedMonth={selectedMonth}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
