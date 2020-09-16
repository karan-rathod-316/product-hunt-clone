import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function Main() {
   
    return (
      <> 
        <Header />
        <main>
        <Hero />
        </main>
        <Footer />
      </>
    );
}

ReactDOM.render(<Main />, document.getElementById('root'));