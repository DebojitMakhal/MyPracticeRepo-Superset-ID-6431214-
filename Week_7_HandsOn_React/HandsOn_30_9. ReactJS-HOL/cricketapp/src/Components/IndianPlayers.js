
function IndianPlayers(){
    const T20players = ["Virat", "Rohit", "Hardik", "Pant", "Jadeja","MS Dhoni"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane", "Shaw", "Sarfaraz", "Iyer"];

  // ES6 Array Destructuring
  const [odd1, even1, odd2, even2, odd3, even3] = T20players;

  // ES6 Spread Operator to merge arrays
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];
  return(
    <div>
        <h1>Odd Players :</h1>
        <ul>
            <li>{odd1}</li>
            <li>{odd2}</li>
            <li>{odd3}</li>
        </ul>
        <h1>Even Players :</h1>
        <ul>
            <li>{even1}</li>
            <li>{even2}</li>
            <li>{even3}</li>    
        </ul>
        <hr/>
        <h1>Merged Players :</h1>
        <ul>
            {mergedPlayers.map((mp,index)=>(
                <li key ={index}>
                    {mp}
                </li>
            ))}
        </ul>
    </div>
  );

}
export default IndianPlayers;
