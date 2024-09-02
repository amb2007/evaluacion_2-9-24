import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
function App() {
  const [data, setData] = useState([])
  const [term, setTerm] = useState("")
  const firstAdv = useEffect(() => {
    axios.get('https://api.adviceslip.com/advice')
         .then((res) => setData(res.data))
         .catch((error) => console.log(error.message))
},[]);
  const handleTermChange = (event) => setTerm(event.target.value);
  const handleClick =() => {
      setData(axios.get('https://api.adviceslip.com/advice')
         .then((res) => setData(res.data))
         .catch((error) => console.log(error.message)))}
  //fede acordate de que a mi no me corria por temas de la compu
  return (
    <main>

      <h1>Evaluación React - Requests</h1>
      <h1>Consejos de vida</h1>
      <h2>{firstAdv}</h2>
      <div>
        <h2>Obtener un consejo aleatorio</h2>
        <button onClick={handleClick}>Obtener</button>
        <p className="result-box">{data}</p>
      </div>

      <div>
        <h2>Buscar un consejo</h2>
        <input type="text" onChange={handleTermChange} />
        <button onClick={handleClick}>Conseguir</button>
        <h1>{advice}</h1>
        <h3>Resultados de búsqueda: </h3>
        <p className="result-box"></p>
      </div>

    </main>
  );
}

export default App;
