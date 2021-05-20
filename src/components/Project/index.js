import React from "react";

const base = "../../assets/"


// Keeps giving error, unsure why
function Project(props) {
    return (
        <div className="container">
            <section class="webInfo">
                <h4 class="titleWord">{props.title}</h4>
                <img src={require(`../../assets/${props.image}`)} class="img-fluid webImg" alt={props.title}></img>
                <p>{props.description}</p>
                <a href={props.repo}>Github Repo</a> <br />
                <a href={props.live}>Live website</a>
            </section>
        </div>
    );
}


export default Project;