import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    incrementAsync,
    selectCount,
} from "./CounterSlice";

export default function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();


    return (
        <div>
            <div>   
                counter

            </div>
        </div>
    );
}