import React, { useState } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [currency] = useState('Euro');
  const [result, setResult] = useState(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert Indian Rupees to Euro (1 Euro = approximately 90 INR)
    // This is a simplified conversion rate for demonstration purposes
    if (amount && !isNaN(amount)) {
      const euroAmount = (parseFloat(amount) / 90).toFixed(2);
      setResult(`Converting to ${currency}: Amount is ${euroAmount}`);
      
      // Show alert with conversion result
      alert(`Converting to ${currency} Amount is ${euroAmount}`);
    }
  };

  return (
    <div>
      <h2>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount: </label>
          <input 
            type="text" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
          />
        </div>
        <div>
          <label>Currency: </label>
          <input 
            type="text" 
            value={currency} 
            readOnly
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {result && <div>{result}</div>}
    </div>
  );
}

export default CurrencyConverter;