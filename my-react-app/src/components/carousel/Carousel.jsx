import "./carousel.css"
import leftArrow from "./../../assets/leftarrow.png"
import rightArrow from "./../../assets/rightarrow.png"
import React, { useState } from 'react';

function Carousel({ pictures }) {
    const [Index, setIndex] = useState(0)

    function goBack() {
        if (Index < 1) {
            setIndex(pictures.length - 1)
        } else {
            setIndex(Index - 1)
        }
    }

    function goFoward() {
        if (Index < pictures.length - 1) {
            setIndex(Index + 1)
        } else {
            setIndex(0)
        }
    }


    return (
        <div className="carousel-container">
            <img className="carousel" src={pictures[Index]} alt='' />
            <img className="right-arrow" src={rightArrow} onClick={goFoward} />
            <img className="left-arrow" src={leftArrow} onClick={goBack} />
        </div>
    )
}


export default Carousel