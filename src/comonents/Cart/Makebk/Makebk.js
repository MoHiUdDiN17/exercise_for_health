import React from 'react';
import './Makebk.css'
const Makebk = (props) => {
    const { time, id } = props.mkbk;
    const active = props.isActive;
    return (
        <div style={{
            backgroundColor: active === id ? 'blue' : '',
        }}
            onClick={() => props.getbreaktime(id)} className='circle ms-3'>
            <h5>{time}s</h5>
        </div>
    );
};

export default Makebk;