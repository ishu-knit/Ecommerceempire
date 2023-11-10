import React, {  createContext } from 'react';

import cimg1 from "../assets/items/citem.webp"
import cimg2 from "../assets/items/citem2.webp"
import cimg3 from "../assets/items/citem3.webp"
import cimg4 from "../assets/items/citem4.webp"
import cimg5 from "../assets/items/citem5.webp"

import simg1 from "../assets/items/sitem1.webp"
import simg2 from "../assets/items/sitem2.webp"
import simg3 from "../assets/items/sitem3.webp"
import simg4 from "../assets/items/sitem4.webp"
import simg5 from "../assets/items/sitem5.webp"

import pitem1 from "../assets/items/pitem1.webp"
import pitem2 from "../assets/items/pitem2.webp"
import pitem3 from "../assets/items/pitem3.webp"
import pitem4 from "../assets/items/pitem4.webp"
import pitem5 from "../assets/items/pitem5.webp"




const Cartproducts= createContext()



// createContext
const allitems  = createContext([])


// provide value
const Items = ({children})=>{

    const allarr = [

        // clothes
        [
            { id: 1, price: 199, img: cimg1, company: "Rebook", qty: 1 },
            { id: 2, price: 409, img: cimg2, company: "Westside", qty: 1 },
            { id: 3, price: 599, img: cimg3, company: "Olivia", qty: 1 },
            { id: 4, price: 423, img: cimg4, company: "Octave", qty: 1 },
            { id: 5, price: 909, img: cimg5, company: "Zara", qty: 1 },
            
        ],

        // shoe
        [
            { id: 6, price: 550, img: simg1, company: "Pamu", qty: 1 },
            { id: 7, price: 600, img: simg2, company: "Abbibas", qty: 1 },
            { id: 8, price: 899, img: simg3, company: "Rebook", qty: 1 },
            { id: 9, price: 1000, img: simg4, company: "Shock", qty: 1 },
            { id: 10, price: 2000, img: simg5, company: "Nicy", qty: 1 },
        ],
            // phone 
        [
            { id: 11, price: 2000, img: pitem1, company: "MI 12 pro", qty: 1 },
            { id: 12, price: 2000, img: pitem2, company: "Redmi 10 power", qty: 1 },
            { id: 13, price: 2000, img: pitem3, company: "Mi 11X 5G", qty: 1 },
            { id: 14, price: 2000, img: pitem4, company: "Oppo A78", qty: 1 },
            { id: 15, price: 750, img: pitem5, company: "Galaxy A14", qty: 1 }
        ]


    ]

    return (
        <allitems.Provider value={{allarr}}>
            {children}
        </allitems.Provider>
    );
};



// create context
const logincustomer = createContext()

// provide context


export  {Cartproducts , allitems ,Items};