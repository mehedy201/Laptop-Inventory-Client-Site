import logo from './logo.svg';
import './App.css';
import Header from './Shaerd/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Add from './Pages/Add/Add';
import SingIn from './Pages/SingIn/SingIn';
import Footer from './Shaerd/Footer/Footer';
import Manage from './Pages/Manage/Manage';
import MyItem from './Pages/MyItem/MyItem';
import SingUp from './Pages/SingIn/SingUp/SingUp';
import RequerAuth from './Pages/RequerAuth/RequerAuth';

function App() {
  return (
    <div>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/add' element={
            <RequerAuth>
              <Add></Add>
            </RequerAuth>
          }></Route>
          <Route path='/manage-item' element={
            <RequerAuth>
              <Manage></Manage>
            </RequerAuth>
          }></Route>
          <Route path='/my-item' element={
            <RequerAuth>
              <MyItem></MyItem>
            </RequerAuth>
          }></Route>
          <Route path='/singIn' element={<SingIn></SingIn>}></Route>
          <Route path='/singUp' element={<SingUp></SingUp>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
