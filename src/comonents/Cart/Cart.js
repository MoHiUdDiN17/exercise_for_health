import React, { useEffect, useState } from 'react';
import Items from './Items/Items';
import './cart.css';
import Makebk from './Makebk/Makebk';
import Tosta from './Tosta/Tosta';
import Blog from '../Blog/Blog';


const Cart = () => {

    const time = localStorage.getItem('Exercise Time');
    const halftime = localStorage.getItem('Break Time');
    let newhalftime, newtime;
    if (time === null) {
        newtime = 0;
    }
    else {
        newtime = JSON.parse(time);
    }
    if (halftime === null) {
        newhalftime = 0;
    }
    else {
        newhalftime = JSON.parse(halftime);
    }
    const breaks = [
        { id: 0, time: 10 },
        { id: 1, time: 20 },
        { id: 2, time: 30 },
        { id: 3, time: 40 },
        { id: 4, time: 50 }];
    const [addedlist, setAddedlist] = useState([]);
    const [exercises, setExercise] = useState([]);
    const [total, setTotal] = useState(newtime);
    const [breaktime, setBreaktime] = useState(newhalftime);
    const [isActive, setIsActive] = useState(-1);
    const [isbutton, setIsbutton] = useState(-1);
    useEffect(() => {
        fetch('input.json')
            .then(res => res.json())
            .then(data => setExercise(data))
    }, [])
    const addcart = (key) => {
        for (const exer of exercises) {
            if (exer.id === key) {
                setTotal(total + parseInt(exer.time));
            }
        }
        setIsbutton(key);
        setAddedlist(oldarray => [...oldarray, key]);
    }
    useEffect(() => {
        localStorage.setItem('Exercise Time', JSON.stringify(total));
    }, [total])

    const getbreaktime = (key) => {
        for (const bk of breaks) {
            if (bk.id === key) {
                setBreaktime(parseInt(bk.time));
            }
        }
        setIsActive(key);
    }

    useEffect(() => {
        localStorage.setItem('Break Time', JSON.stringify(breaktime));
    }, [breaktime])


    return (
        <div className='bg-light divide'>
            <div>
                <h1 className='text-primary ms-5 mt-5'>Make-yourself-Fit</h1>
                <div className="mt-3 ms-5 mb-5 me-5 row row-cols-2 row-cols-md-3 g-4">
                    {
                        exercises.map(ex => <Items
                            exercise={ex}
                            addedlist={addedlist}
                            isbutton={isbutton}
                            addcart={addcart}
                        ></Items>)
                    }
                </div>
                <div>
                    {
                        <Blog></Blog>
                    }
                </div>
            </div>
            <div className='stick pt-5 ps-4'>
                <h5>Mohammad Mohiuddin</h5>
                <p>Rajshahi,Bangladesh</p>
                <h5 className='mt-3'>Add A Break</h5>
                <div className='row-split me-3'>
                    {
                        breaks.map(bk => <Makebk
                            mkbk={bk}
                            isActive={isActive}
                            getbreaktime={getbreaktime}
                        ></Makebk>)
                    }
                </div>
                <h5 className='mt-3'>Exercise Details</h5>
                <div className='clr mt-3 me-3'>
                    <div><h5>Exercise Time</h5></div>
                    <div className='pe-5 mt-2'><p>{total} Seconds</p></div>
                </div>
                <div className='clr mt-3 me-3'>
                    <div><h5>Break Time</h5></div>
                    <div className='pe-5 mt-2'><p>{breaktime} Seconds</p></div>
                </div>
                <div>
                    {<Tosta></Tosta>}
                </div>
            </div>
        </div>
    );
};

export default Cart;