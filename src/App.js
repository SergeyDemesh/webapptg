import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import {useTg} from "./hooks/useTg";

const tg = window.Telegram.WebApp

const App = () => {

  const {onToggleButton} = useTg()

  useEffect(() => {
    tg.ready();
  }, [])



  return (
    <div className="app">
      <Header></Header>
      <button onClick={onToggleButton}>Toggle Tg</button>
    </div>
  );
}

export default App;