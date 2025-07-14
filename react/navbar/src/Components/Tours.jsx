import React from "react";
import data from "../data";
import Cards from "./Card";
function Tours({tours,BtnHandler}){
    return(
        <div className="container">
            <div>
                <h2 className="heading 1">Plan With Love  </h2>
            </div>
            <div className="Cards">{
                tours.map((tour)=> 
                    {
                    return <Cards key = {tour.id} {...tour} BtnHandler={BtnHandler}/>
                })
                }</div>
        </div>
    )
}

export default Tours;