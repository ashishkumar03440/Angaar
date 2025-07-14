import React from "react";
import { useState } from 'react'
import data from "../data";
import Tours from "../Components/Tours";
function Home(){
        const [tours, setTour] = useState(data)

    return(
        <div>
            <Tours tours = {tours}  />
        </div>
    )
}

export default Home;