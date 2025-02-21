import React, { useState } from 'react';
import '../App.css'
// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ id, title, description, imageName, price, totals, setTotals, cost, setCost}) => {
    const decrease = () => {
        if (totals[title] === 0) {
            return;
        }
        totals = {...totals}
        totals[title] -= 1
        setTotals(totals);
        setCost(cost-price);
    }
    const increase = () => {
        totals = {...totals}
        totals[title] += 1
        setTotals(totals);
        setCost(cost+price);
        
    }
    return (
        
        <div className="menu-item">
            <img className="menu-item-image" src={'/cs378-p3/images/'+imageName} alt={title} />
            <div className="menu-item-info">
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
                <div className="button-separator">
                    <span className="price">${price.toFixed(2)}</span>
                    <div class="adder">
                        <button class="decrease" onClick={decrease}>−</button>
                        <span class="quantity">{totals[title]}</span>
                        <button class="increase" onClick={increase}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
