import React from "react";
import bookflixPic from "../../assets/bookflix.png";
import dearDiary from "../../assets/DearDiarySS1.PNG";
import codeQuiz from "../../assets/Screenshot (1053).png";
import dayPlanner from "../../assets/Screenshot (1113).png";
import budgetTracker from "../../assets/18-budget-2.PNG";
import employeeDir from "../../assets/19-directory-1.PNG";
const base = "../../assets/"


// Keeps giving error, unsure why
function Project(props) {
    let imageSrc;
    switch (props.image) {
        case "bookflix.png":
            imageSrc = bookflixPic
            
            break;
        case "DearDiarySS1.PNG":
            imageSrc = dearDiary
            
            break;
        case "Screenshot (1053).png":
            imageSrc = codeQuiz
            
            break;
        case "Screenshot (1113).png":
            imageSrc = dayPlanner
            
            break;
        case "18-budget-2.PNG":
            imageSrc = budgetTracker
            
            break;
        case "19-directory-1.PNG":
            imageSrc = employeeDir

            break;
    
        // default:
            
        //     break;
    }
    return (
        <div className="container webContain">
            <section class="webInfo">
                <h4 class="titleWord">{props.title}</h4>
                <img src={imageSrc} class="img-fluid webImg" alt={props.title}></img>
                <p>{props.description}</p>
                <a href={props.repo}>Github Repo</a> <br />
                <a href={props.live}>Live website</a>
            </section>
        </div>
    );
}


export default Project;