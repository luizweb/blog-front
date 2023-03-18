import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import PostPage from './pages/PostPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import NewPostPage from './pages/NewPostPage';
import AdminPostPage from './pages/AdminPostPage';
import AdminUserPage from './pages/AdminUserPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import RecoverPassPage from './pages/RecoverPassPage';
import UpdatePassPage from './pages/UpdatePassPage';
import ProfilePage from './pages/ProfilePage';
import ErrorPage from './pages/ErrorPage';
import BlogPage from './pages/BlogPage';
import BlogCategoryPage from './pages/BlogCategoryPage';
import BlogTagPage from './pages/BlogTagPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';

import { AuthContextComponent } from "./contexts/authContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRouteAdmin from "./components/ProtectedRouteAdmin";

function App() {
  return (
    <div>
    
    <AuthContextComponent>
      <Toaster />
      <Navbar />
      
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        
        <Route path="/blog" element={ <BlogPage /> } />
        <Route path="/blog/:slug" element={ <PostPage /> } />
        <Route path="/blog/categoria/:categoria" element={ <BlogCategoryPage /> } />
        <Route path="/blog/tag/:tag" element={ <BlogTagPage /> } />
        
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/contact" element={ <ContactPage /> } />
        <Route path="/portfolio" element={ <PortfolioPage /> } />

        <Route path="/signup" element={ <SignUpPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/recoverpass" element={ <RecoverPassPage /> } />
        <Route path="/updatepass/:id" element={ <UpdatePassPage /> } />
        <Route path="/profile" element={ <ProtectedRoute Component={ProfilePage} /> } />
        
        <Route path="/newpost" element={ <ProtectedRouteAdmin Component={NewPostPage} /> } />
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
