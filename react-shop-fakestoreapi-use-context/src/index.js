import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.css';
import App from './App';
import ProductProvider from './contexts/ProuductContext';
import CartProvider from './contexts/CartContext';
import SidebarProvider from './contexts/SidebarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SidebarProvider>
        <CartProvider>
            <ProductProvider>
                <App />
            </ProductProvider>
        </CartProvider>
    </SidebarProvider>
);
