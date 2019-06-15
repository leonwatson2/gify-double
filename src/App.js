import React, { useState } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import './App.css';

import GifContainer from './components/GifContainer';
import { useSearchInputFetch } from './hooks/useSearchInputFetch';
import AppTheme from './AppTheme';

function App() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState('bears');
  const [searchRef] = useSearchInputFetch(setGifs);

  const onSearchChange = ({ target }) => {
    setQuery(target.value);
  };
  return (
    <MuiThemeProvider theme={AppTheme}>
      <div className='App'>
        <header className='App-header'>
          <TextField
            id='gif-search'
            label='Search a Gif'
            ref={searchRef}
            value={query}
            onChange={onSearchChange}
            margin='normal'
          />
        </header>
        <div className='gif-list'>
          {gifs.map(gif => {
            return <GifContainer key={gif.id} gif={gif} />;
          })}
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
