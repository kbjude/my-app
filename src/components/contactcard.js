import React from "react";

const CardContainer = (props) => {
    return (
        <div className="contact-card">
            <div>
                <h3 style={{display: props.name ? "block" : "none"}}>Name: {props.name}</h3>
                <p style={{color: !props.name && "red"}}>Phone: {props.phone}</p>
                <p>Email: {props.email}</p>
            </div>
            <div>
                <h2> Name: {props.name}</h2>
                <p> Grade: {props.grade} </p>
                <p> Address: {props.address} </p>
                <p> Notes: {props.notes} </p>
                <p> Status: {props.status} </p>
            </div>
        </div> 
    )
}

export default CardContainer