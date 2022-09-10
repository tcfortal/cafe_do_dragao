import React from "react";
import './Card.css';

function Card(props) {
    return (
        <>
        <div className="card">
            <div className="card_body">
                <img className="card_image" src={props.img} alt= "imagens" />
                <h2 className="card_title">{props.title}</h2>
            </div>
           
        </div>
        </>
    )
} export default Card;