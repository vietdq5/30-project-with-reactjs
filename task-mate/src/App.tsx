import './App.css'
import AddTask from './components/AddTask';
import Header from './components/Header';
import ShowTask from './components/ShowTask';
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState<string>(
    JSON.parse(localStorage.getItem('theme') ?? '"medium"')
  );
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);
  return (
    <div className={"App" + theme}>
      <div className='container'>
        <Header children="viet Test" theme={theme} setTheme={setTheme} >TaskMate</Header>
        <AddTask />
        <ShowTask />
      </div>

    </div>
  )
}

export default App
