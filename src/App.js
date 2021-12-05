import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <>
    <Header name="🏡 hotel.io"/>
    <BrowserRouter>
    <Routes>
    <Route path="/home" exact element={<Homepage />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}
 
export default App;
