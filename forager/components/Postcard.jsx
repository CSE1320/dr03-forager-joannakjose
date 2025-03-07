'use client';
import React from 'react';

const Postcard = ({ image, name, warning }) => {
    return (
        <div className="flex flex-col items-center mb-16">
            {/* Polaroid Card */}
            <div className="relative w-[200px] h-[240px] bg-white shadow-lg p-2 flex justify-center items-center">
                {/* Warning Icon in Top Left */}
                {warning && (
                    <img
                        src="icons/warning.svg"  // Make sure this file exists in public/
                        alt="Warning"
                        className="absolute top-2 left-2 w-10 h-10 z-10 bg-white rounded-full p-1 shadow-md"
                    />
                )}
                
                {/* Image */}
                <img src={image} alt={name} className="w-full h-[90%] object-cover" />
            </div>
            
            {/* Title Below */}
            <div className="mt-6 text-2xl font-semibold text-[#203B5F]">{name}</div>
            
            {/* Warning Message (if exists) */}
            {warning && <div className="mt-2 text-red-600 font-bold">{warning}</div>}
        </div>
    );
};

export default Postcard;
