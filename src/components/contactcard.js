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
                <h2 style={{display: props.name ? "block" : "none"}}> Name: {props.name}</h2>
                <p style={{color: !props.name && "green"}}> Grade: {props.grade} </p>
                <p style={{color: !props.name && "green"}}> Address: {props.address} </p>
                <p style={{color: !props.name && "green"}}> Notes: {props.notes} </p>
                <p style={{color: !props.name && "green"}}> Status: {props.status} </p>
            </div>
        </div> 
    )
}

export default CardContainer