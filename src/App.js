import './App.css';
import {Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import PostPage from './pages/PostPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import NewPostPage from './pages/NewPostPage';
import AdminPostPage from './pages/AdminPostPage';
import AdminUserPage from './pages/AdminUserPage';
import SignUpPage from './pages/SignUpPage';


function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={ <HomePage /> }></Route>
      <Route path="/post/:postId" element={ <PostPage /> }></Route>
      
      <Route path="/new-post" element={ <NewPostPage /> }></Route>
      <Route path="/new-user" element={ <SignUpPage /> } />
      
      <Route path="/admin-post" element={ <AdminPostPage /> } />
      <Route path="/admin-user" element={ <AdminUserPage /> } />
    </Routes>
    <Footer />

    
    </div>
  );
}

export default App;
