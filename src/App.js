import logo from './logo.svg';
import './App.css';
import Header from './Shaerd/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Add from './Pages/Add/Add';
import SingIn from './Pages/SingIn/SingIn';
import Footer from './Shaerd/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/add' element={<Add></Add>}></Route>
          <Route path='/singIn' element={<SingIn></SingIn>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
