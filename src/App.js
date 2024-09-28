import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import {useTg} from "./hooks/useTg";


const App = () => {

  const {tg} = useTg()

  useEffect(() => {
    tg.ready();
  }, [])



  return (
    <div className="app">
      <Header></Header>
        <Routes>
            <Route index element={<ProductList />} />
            <Route path={'form'} element={<Form />} />
        </Routes>
    </div>
  );
}

export default App;