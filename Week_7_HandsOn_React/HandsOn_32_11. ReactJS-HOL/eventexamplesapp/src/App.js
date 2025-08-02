import './App.css';
import Counter from './components/Counter';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <Counter />
      <hr />
      <CurrencyConverter />
    </div>
  );
}

export default App;
