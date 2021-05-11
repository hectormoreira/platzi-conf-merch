import React from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import '../styles/components/Layout.css'

const Layout = ({children}) => {
    return (
        <div className="Main">
            <Header/>
                {children}
            <Footer/>
        </div>
    );
};

export default Layout;