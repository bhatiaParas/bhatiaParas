import React, { useState } from 'react'
import './style.css';
import Menu from './menuApi.js';
import MenuCard from './menuCard.js';

const Restaurant = () => {
    const [menuData, setmenuData] = useState(Menu);
    // console.log(Menu);
    // console.log(menuData);
    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        console.log(updatedList);
        setmenuData(updatedList);

    }
  return (
    <>
    <nav className="navbar">
        <div className="btn-group">
            <div className="btn-group__item" onClick={ () => {filterItem("breakfast")}}>Breakfast</div>
            <div className="btn-group__item" onClick={ () => {filterItem("lunch")}}>Lunch</div>
            <div className="btn-group__item" onClick={ () => {filterItem("evening")}}>Evening</div>
            <div className="btn-group__item" onClick={ () => {filterItem("dinner")}}>Dinner</div>
            <div className="btn-group__item" onClick={ () => {setmenuData(Menu)}}>All</div>
        </div>
    </nav>
   <MenuCard menuData = {menuData}/>
    </>
  )
}

export default Restaurant