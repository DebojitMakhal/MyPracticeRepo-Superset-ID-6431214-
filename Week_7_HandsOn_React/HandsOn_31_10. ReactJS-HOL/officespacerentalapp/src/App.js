import './App.css';
import { useState } from 'react';

function App() {
  // Create a list of office space objects
  const [officeSpaces] = useState([
    { Name: "DBS", Rent: 50000, Address: "Chennai", image: "/office1.jpg" },
    { Name: "Ul Limited", Rent: 70000, Address: "Bangalore", image: "/office2.jpg" },
    { Name: "Jackson & Co", Rent: 45000, Address: "Hyderabad", image: "/office3.jpg" },
    { Name: "Raymond", Rent: 65000, Address: "Pune", image: "/office4.jpg" }
  ]);

  // Function to determine text color based on rent amount
  const getRentColor = (rent) => {
    return rent <= 60000 ? "textRed" : "textGreen";
  };

  return (
    <div className="App">
      <h1>Office Space , at Affordable Range</h1>
      <div className="office-list">
        {officeSpaces.map((office, index) => (
          <div key={index} className="office-card">
            <img src={office.image} width="25%" height="25%" alt="Office Space" />
            <h1>Name: {office.Name}</h1>
            <h3 className={getRentColor(office.Rent)}>Rent: Rs. {office.Rent}</h3>
            <h3>Address: {office.Address}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
