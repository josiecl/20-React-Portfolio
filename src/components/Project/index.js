import React from "react";

// Keeps giving error, unsure why
function Project(props) {
    return (
        <div className="container">
            <section class="webInfo">
                <h4 class="titleWord">{props.title}</h4>
                <img src={props.image} class="img-fluid webImg" alt={props.title}></img>
                <p>{props.description}</p>
                <a href={props.repo}>Github Repo</a>
                <a href={props.live}>Live website</a>
            </section>
        </div>
    );
}


export default Project;