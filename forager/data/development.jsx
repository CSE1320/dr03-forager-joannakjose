// data/development.js
export const mushrooms = [
    {
        id:1,
        image: "/images/deathcap.jpg",
        name: 'Death Cap',
        warning: 'Highly toxic',
        tags:["Favourites"],
        regions:["North America"],
        categories:["Poisonous"],
    },
    {
        id:2,
        image: 'images/paddy straw.jpg',
        name: 'Paddy Straw',
        warning: 'Caution advised',
        
    },
    {
        id:3,
        image: 'images/destroying angel.jpg',
        name: 'Destroying Angel',
        warning: 'Extremely toxic'
    },
    {
        id:4,
        image: '/images/false death cap.jpg',
        name: 'False Death Cap',
        warning: 'Highly toxic'
    },
    {
        id:5,
        image: 'images/puffball.jpg',
        name: 'Puffball',
        warning: 'Edible'
    }
];



const warningMessage = {
    header: "warning",
    icon: "/icons/icon_warning.svg",
    message: "This is a toxic species, proceed with caution."
};

// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export {warningMessage, dummyData}; // Requires import {warningMessage, dummyData} from './data/development.js';
