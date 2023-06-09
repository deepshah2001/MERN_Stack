import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const {c} = useSelector(state => state.custom);

    const dispatch = useDispatch();

    // Functions for on click button functionality
    const addBtn = () => {
        dispatch({
            type: "increment",
        });
    };

    const addBtnByVal = () => {
        dispatch({
            type: "incrementByValue",
            payload: 25,
        })
    }

    const subBtn = () => {
        dispatch({
            type: "decrement",
        })
    }

    return (
        <div>
            <h2>{c}</h2>
            
            <button onClick={addBtn}>Increment</button>
            <button onClick={addBtnByVal}>Increment By 25</button>
            <button onClick={subBtn}>Decrement</button>
        </div>
    )
}

export default Home;