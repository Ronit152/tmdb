import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { MainContainer } from './Components/Container/MainContainer';
import { Footer } from './Components/Footer/Footer';

import { Header } from './Components/Header/Header';

function App() {
  return (
    <>
    <BrowserRouter>

    <Header/>
    <MainContainer/>
    <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
