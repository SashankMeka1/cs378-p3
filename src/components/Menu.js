import '../App.css';
import MenuItem from '../components/MenuItem';
import { React, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.

const Menu = ({}) => {
    const menuItems = [
        {
            id: 1,
            title: 'Gyoza',
            description: 'Japanese dumplings',
            imageName: 'gyoza.png',
            price: 5.99,
        },
        {
            id: 2,
            title: 'Sushi',
            description: 'Japanese rice rolls',
            imageName: 'sushi.png',
            price: 6.99,
        },
        {
            id: 3,
            title: 'Ramen',
            description: 'Japanese noodle soup',
            imageName: 'ramen.png',
            price: 7.99,
        },
        {
            id: 4,
            title: 'Matcha Cake',
            description: 'Japanese green tea cake',
            imageName: 'matcha-cake.png',
            price: 4.99,
        },
        {
            id: 5,
            title: 'Mochi',
            description: 'Japanese rice cake',
            imageName: 'mochi.png',
            price: 3.99,
        },
        {
            id: 6,
            title: 'Yakitori',
            description: 'Japanese skewered chicken',
            imageName: 'yakitori.png',
            price: 2.99,
        },
        {
            id: 7,
            title: 'Takoyaki',
            description: 'Japanese octopus balls',
            imageName: 'takoyaki.png',
            price: 5.99,
        },
        {
            id: 8,
            title: 'Sashimi',
            description: 'Japanese raw fish',
            imageName: 'sashimi.png',
            price: 8.99,
        },
        {
            id: 9,
            title: 'Okonomiyaki',
            description: 'Japanese savory pancake',
            imageName: 'okonomiyaki.png',
            price: 6.99,
        },
        {
            id: 10,
            title: 'Katsu Curry',
            description: 'Japanese curry with fried pork',
            imageName: 'katsu-curry.png',
            price: 9.99,
        }
    ];
    const [itemTotals, setTotals] = useState(menuItems.reduce((totals, item) => {
        const data = {...item};
        totals[data['title']] = 0;
        return totals;
    }, {}));

    const [cost, setCost] = useState(0)
    const items = menuItems.map((item, index) => {
        const data = {...item};
        data['totals'] = itemTotals
        data['setTotals'] = setTotals
        data['cost'] = cost
        data['setCost'] = setCost
        return <MenuItem key={index} {...data} />
    })
    


    const clear = () => {
        const newTotals = { ...itemTotals };
        Object.keys(newTotals).forEach(title => {
            newTotals[title] = 0;
        });
        setTotals(newTotals);
        setCost(0);
        
    }
    const order = () => {
        const header = "You ordered:\n";
        var text = "";
        Object.keys(itemTotals).forEach(title => {
            if (itemTotals[title] !== 0) {
                text += `${itemTotals[title]} ${title}\n`
            }
            itemTotals[title] = 0;
        });
        alert(text == "" ? "Empty cart" : header + text);
        clear();
        
    }
    
  return (
      <div className="menu">
        {
          items
        }
        <div class="cart">
            <h2>Cart</h2>
            <div class="cart-items"></div>
                <p class="subtotal">Subtotal: ${Math.round(cost*100)/100}</p>
                <button class="cart-btn" onClick={order}>Order</button>
                <button class="cart-btn" onClick={clear}>Clear all</button>
            </div>
      </div>
  );
}

export default Menu;
