import React from "react";


function Cards({id,image,price,name,info,}){
    return(
        <div className="card">
            <img src={image} className="image" />
            <div className="tour-info">
                  <div className="tour-details">
                        <h4>${price}</h4>
                        <h4>{name}</h4> 
                  </div>
                <div>
                    {info}
                    <span className="read more">readmore</span>
                </div>
            </div>
            <button className="btn-red" >Not Intrested</button>
        </div>
    )
}

export default Cards;
