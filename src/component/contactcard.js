import React from "react";
import cicon from "../images/cicon.jpeg";
import {AiTwotoneDelete} from "react-icons/ai"


const Card = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="card" key={props.id}>
            <div ><img className="img" src={cicon}  /></div>
            <div className="box2">
                <div className="name">{name}</div>
                <div className="email">{email}</div>
            </div>
            <div className="icon" onClick={() => props.clickHandler(id)}><AiTwotoneDelete/></div>
        </div>
    );
};

export default Card;
