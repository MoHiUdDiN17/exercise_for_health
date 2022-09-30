import React from 'react';
import './Items.css'
const Items = (props) => {
    const { id, age, time, text, exercise, img } = props.exercise;
    const isclickbutton = props.isbutton;
    const addlist = props.addedlist;
    const trueorfalse = addlist.find(key => key === id)
    const string = 'Add to list'
    const string1 = 'Added'
    return (
        <div className='col'>
            <div className='card'>
                <img src={img} className='card-img-top' alt="" />
                <div className='card-body'>
                    <h5 className='card-title'>{exercise}</h5>
                    <p className='card-text'>{text.slice(0, 140)}...</p>
                    <h5>For Age: {age}</h5>
                    <h5>Time required: {time}</h5>
                    <br></br>
                    <button
                        style={{
                            backgroundColor: trueorfalse ? 'green' : '',
                        }}
                        onClick={() => props.addcart(id)} type="button" className="btn btn-info cent">{trueorfalse ? string1 : string}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Items;

