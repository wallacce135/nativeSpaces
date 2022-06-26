import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Error from './Components/Error404/Error';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/error' element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
