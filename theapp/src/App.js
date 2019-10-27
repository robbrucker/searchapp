import React from 'react';
import logo from './logo.svg';
import SearchInput from './search_input/SearchInput';
import MainWrapper from './MainWrapper';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <MainWrapper id={'searchInput'} type={'text'} fieldClassName={'searchInput'} />
      </header>

    </div>
  );
}

export default App;
