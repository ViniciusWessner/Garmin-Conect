import React, { useEffect, useState } from 'react';

function App() {
  const [atividades, setAtividades] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/atividades')
      .then(response => response.json())
      .then(data => {
        setAtividades(data);
      })
      .catch(error => console.error('Erro ao buscar atividades:', error));
  }, []);

  return (
    <div className="App">
      <h1>Atividades</h1>
      <ul>
        {atividades.map((atividade) => (
          <li key={atividade.id}>
            {atividade.name} - {atividade.distance} km
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
