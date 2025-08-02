
import './App.css';
import ListOfPlayers from './Components/ListOfPlayers';
import IndianPlayers from './Components/IndianPlayers';
import { useState } from 'react';

function App() {
  const[flag,setFlag]=useState(false)
  return (
    <div>
        <button onClick={()=>setFlag(!flag)}>Show/Hide</button>
        {!flag && <IndianPlayers/>}
        {flag && <ListOfPlayers/>}
    </div>
  );
}

export default App;
