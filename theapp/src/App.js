import React from 'react';
import logo from './logo.svg';
import SearchInput from './search_input/SearchInput';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <SearchInput id={'searchInput'} type={'text'} fieldClassName={'searchInput'} />
            <h1>Searching</h1>
      </header>

    </div>
  );
}

export default App;
