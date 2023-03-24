import './App.css';
import Navigation from './componemts/Navigation'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Chat from './pages/Chat'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/chat" element={<Chat></Chat>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
