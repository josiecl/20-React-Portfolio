import React from "react";

// Keeps giving error, unsure why
function Project() {
    return (
        <div className="container">
            <div className="row">

                <section className="col-sm-3"></section>

                <section className="col-sm-6">
                    <h2 className="title ">Websites I've Made</h2>
                    <section className="webInfo">
                        <h4 className="titleWord">Bookflix</h4>
                        <img src="Assets/Images/Screenshot (1084).png" class="img-fluid webImg" alt="Bookflix website screenshot of the main page. It has an input field, and a background image of popcorn.">
                        <p>This was my first site built with a team. I was a front-end developer along with Omaur Bliss, while Betiel Habtemariam and Jennifer Nelson worked on back-end development. This site allows users to search a movie, which will return a description of said movie. The user can then select this movie, which will return books either about or related to said movie. The user can then store books they wish to save in their library. This site makes use of several APIs, local storage, and session storage. Link to site <a href="https://omaurbliss.github.io/Seinfeld.oi/">here</a>, and links to <a href="https://github.com/OmaurBliss">Omaur's</a>, <a href="https://github.com/jnel-221">Jennifer's</a>, <a href="https://github.com/betielbetu">Betiel's</a>, and <a href="https://github.com/josiecl">my</a> Github pages here.</p>
                    </section>
                </section>
                
                <section className="col-sm-3"></section>

    
            </div>
        </div>
    );
}


export default Project;