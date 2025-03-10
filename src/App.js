import './App.css';
import { Route, Routes } from 'react-router-dom';
import GetPage from './pages/basic/GetPage';
import PutPage from './pages/basic/PutPage';
import DeletePage from './pages/basic/DeletePage';
import PostPage from './pages/basic/PostPage';
import { Global } from '@emotion/react';
import { reset } from './styles/global';
import MainLayout from './components/MainLayout/MainLayout';
import Sidebar from './components/Sidebar/Sidebar';
import MainContainer from './components/MainContainer/MainContainer';
import PostPage2 from './pages/basic/PostPage2';
import PromisePage from './pages/basic/PromisePage';
import RegisterSizePage from './pages/basic/RegisterSizePage';
import RegisterColorPage from './pages/basic/RegisterColorPage';
import ComputerPage from './pages/basic/ComputerPage';

function App() {
  return (
    <>
    <Global styles={reset}/>
    <MainLayout>
      <Sidebar />
      <MainContainer>
        <Routes>
          <Route path='/async/basic/post' element={<PostPage />} />
          <Route path='/async/basic/get' element={<GetPage />} />
          <Route path='/async/basic/put' element={<PutPage />} />
          <Route path='/async/basic/delete' element={<DeletePage />} />
          <Route path="/async/basic/post2" element={<PostPage2 />} />
          <Route path="/async/basic/promise" element={<PromisePage />} />
          <Route path="/async/basic/regisize" element={<RegisterSizePage />} />
          <Route path="/async/basic/regicolor" element={<RegisterColorPage />} />
          <Route path="/computer" element={<ComputerPage />} />
        </Routes>
      </MainContainer>
    </MainLayout>
    </>
  );
}

export default App;
