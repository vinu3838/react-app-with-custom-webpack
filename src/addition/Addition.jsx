import React, { useState } from 'react';
import './Addition.scss';

const Addition = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const consoleNumber = (event) => {
        console.log(event);
    }
    return (<div className='row'>
        <div className="col-4">
            <input className="form-control" type='number' onChange={e => setNumber1(parseInt(e.target.value || 0))} />
        </div>
        <div className="col-4">
            <input className="form-control" type='number' onChange={e => setNumber2(parseInt(e.target.value || 0))} />
        </div>
        <div className="col-4">
            <button className="btn btn-primary" onClick={consoleNumber}>Add</button>
            <input type="button" className='btn btn-primary mx-2' value={number1 + number2} />
        </div>
    </div>);
};

export default Addition;
