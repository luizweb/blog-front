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
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ErrorPage from './pages/ErrorPage';

import { AuthContextComponent } from "./contexts/authContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRouteAdmin from "./components/ProtectedRouteAdmin";

function App() {
  return (
    <div>
    <AuthContextComponent>
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/post/:postId" element={ <PostPage /> } />
        
        <Route path="/newpost" element={ <NewPostPage /> } />
        <Route path="/signup" element={ <SignUpPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/profile" element={ <ProtectedRoute Component={ProfilePage} /> } />
        
        <Route path="/admin-post" element={ <ProtectedRouteAdmin Component={AdminPostPage} /> } />
        <Route path="/admin-user" element={ <ProtectedRouteAdmin Component={AdminUserPage} /> } />
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
      <Footer />
    </AuthContextComponent>
    
    </div>
  );
}

export default App;
