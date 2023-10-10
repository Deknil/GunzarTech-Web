import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import Policy from './pages/Policy';
import NotFoundPage from './pages/NotFoundPage';

import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

export default function App() {
    return (
        <div>
            <ToastContainer
                position='bottom-center'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
            />
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Products />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/policy' element={<Policy />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </div>
    );
}
