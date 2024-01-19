import { Route, Routes } from 'react-router-dom';
import { Login, SignUp, User } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' index element={<User />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
