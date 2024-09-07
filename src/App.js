import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';

const tg = window.Telegram.WebApp

const App = () => {

  useEffect(() => {
    tg.ready();
  }, [])



  return (
    <div className="app">
      <Header></Header>
    </div>
  );
}

export default App;