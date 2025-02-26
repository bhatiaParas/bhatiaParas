import React from 'react'
import './style.css';

const MenuCard = ({ menuData }) => {
    console.log(menuData); 
    const myStyle = {color: "red"};

  return (
    <>
    <section className='main-card--cointainer'>
    {menuData.map((currElem) => {
        return (
            <>
            <div className='card-container' key={currElem.id}> 
            <div className='card'> 
                <div className='card-body'>
                    <span className='card-number card-circle subtle'>{currElem.id}</span>
                    <span className='card-author subtle' style={myStyle}>{currElem.category}</span>
                    <h2 className='card-title'> {currElem.name} </h2>
                    <span className='card-description subtle'>
                       {currElem.description}
                    </span>
                    <div className="card-read">Read</div>
                    <img src={currElem.image} alt="images" className='card-media' />
                    {/* <span className='card-tag subtle' onClick = { () => { alert("Button Clicked") } }>Order Now</span> */}
                    <button className='card-tag subtle' onClick = { () => { alert("Hey bewkoof....You dont have any Work...Just go and do web development") } }>Order Now</button>
                </div>
            </div>
        </div>
        </>
        )
    })

    }
    </section>
    </>
  )
}

export default MenuCard