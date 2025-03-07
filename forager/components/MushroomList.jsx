'use client'
import React from 'react';
import Postcard from './Postcard';
import {dummyData} from '../data/development';

const MushroomList = () => {
    return (
        <ul className="polaroid-container">
            {dummyData.map((mushroom, index) => (
                <li key={index} className="polaroid-wrapper">
                    <div className="polaroid-card">
                        
                        <img src={mushroom.image} alt={mushroom.name} />
                    </div>
                    <div className="title">{mushroom.name}</div>
                </li>
            ))}
        </ul>
    );
};

export default MushroomList;
