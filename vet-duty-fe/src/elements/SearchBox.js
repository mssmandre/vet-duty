import React, { useState } from 'react';

function SearchBox() {
  const [cityName, setCityName] = useState('');

  const handleSearch = () => {
    // Implemente a lógica de pesquisa aqui
    alert(`Pesquisando plantões em: ${cityName}`);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Digite o nome da cidade"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button onClick={handleSearch}>Pesquisar</button>
    </div>
  );
}

export default SearchBox;
