import React from 'react';
import './ShortAbout.css';
import './Cards.css';
import { Link } from 'react-router-dom';

function ShortAbout() {
    return (
        <>
        <center>
        <div className="cards">
            <h2>About Me</h2>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <p className="marginPushDown">Hello! My name is Mitchell Gruner and I graduated from
                            California State University, Sacramento with a Bachelors of Science in Computer Science degree. In my final semester of school, while I was taking online classes due to the pandemic, I was
                            fortunate enough to have the opportunity to move to Nashville, Tennessee. Upon graduation, I was offered a position to work for Electronic Express as a full-time Front End Developer. I currently have over a years worth of experience developing code, and I am very passionate about learning new technologies on the side.<br/>
                            While being a full-time student and professional developer, I was also able to create some<Link to="/projects" 
                            className="link-attributes">side projects</Link>that I am very proud of.
                        </p>

                        <p className="marginPushDown">My main duties at Electronic Express include:<br />
                        <ol>
                            <li>Utilizing HTML & CSS, JavaScript, jQuery, Bootstrap.js, and AJAX</li>
                            <li>Developing landing pages for various companies ranging from Samsung to Yeti</li>
                            <li>Maintaining and improving the Electronic Express website</li>    
                        </ol>
                        </p>
                    </div>
                </div>
        </div>
        </center>
        </>
    )
}

export default ShortAbout;