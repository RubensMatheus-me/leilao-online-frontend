import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SimpleLayout from './components/SimpleLayout';
import DefaultLayout from './components/DefaultLayout';
import Register from './pages/register/Register';
import RecoveryPassword from './pages/recovery/RecoveryPassword';

function App() {
  return (
    <>
      {/* <Header/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/>
          <Route path='/login' element={<SimpleLayout><Login/></SimpleLayout>} />
          <Route path='/register' element={<SimpleLayout><Register/></SimpleLayout>} />
          <Route path='/recoveryPassword' element={<SimpleLayout><RecoveryPassword/></SimpleLayout>} />
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </>
  );
}

export default App;
