import { useEffect } from 'react';
import './App.css';
import {useTg} from "./hooks/useTg";
import Header from './components/Header/Header';
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";

const tg = window.Telegram.WebApp

const App = () => {

  // const {onToggleButton} = useTg()

  useEffect(() => {
    tg.ready();
  }, [])



  return (
    <div className="app">
      <Header></Header>
        <Routes>
            <Route index element={<ProductList />}     />
            <Route path={'form'} element={<Form />} />
        </Routes>
    </div>
  );
}

export default App;