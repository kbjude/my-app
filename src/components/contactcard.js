import React from "react";

const CardContainer = (props) => {
    return (
        <div className="contact-card">
            <h3 style={{display: props.name ? "block" : "none"}}>Name: {props.name}</h3>
            <p style={{color: !props.name && "red"}}>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div> 
    )
}

export default CardContainer