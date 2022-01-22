import React from 'react';
import Addition from './addition/Addition.jsx';
import './App.scss';
import img from './../public/assests/favicon.ico'

const App = () => {
    return (
        <>
            <div className='container mx-5 mt-5'>
            <Addition />
            <img src={img} alt="Sample" className='rounded mx-auto m-3' />
            </div>
        </>
    )
};

export default App;