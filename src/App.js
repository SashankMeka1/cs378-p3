import './App.css';
import Menu from './components/Menu';
import { useState, useRef } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.

function App() {
  return (
    <div className="app">
      <header className="header">
        <img className="logo" src="/cs378-p3/images/logo.png" alt="Campus Cafe Logo" />
        <p className="menu-cursive">
          <em>Delicious, From-Scratch Recipes Close at Hand</em>
        </p>
        <h1 className="menu-title">The Fresh Choice of UT!</h1>
      </header>
      <Menu/>
      

    </div>
  );
}

export default App;
