import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RecipeProvider } from './contexts/RecipeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Favorites from './components/Favorites';
import './App.css';

const App = () => {
  return (
    <RecipeProvider>
       <Header />
      <Routes>
      
            <Route path="/" element={<Home/>} />
            <Route path="/favorites" element={<Favorites/>} />          
    
       
      </Routes>
      <Footer />
    </RecipeProvider>
  );
};

export default App;