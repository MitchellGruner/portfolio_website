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
                                <p className="marginPushDown">Hello!  My name is Mitchell Gruner and I recently graduated from
                                    California State University, Sacramento with my Bachelor of Science in Computer Science degree.
                                    In my final semester of school, while I was taking online classes due to the pandemic, I was
                                    fortunate enough to have the opportunity to move to Nashville, Tennessee; this was
                                    a dramatic change for me, since I have lived near Sacramento, California my entire life.
                                    While being a full-time student, I was also able to create some<Link to="/projects" 
                                    className="link-attributes">side projects</Link>that I am very proud of, and start my own
                                    <Link to={{ pathname: "https://www.grunerwebdesign.com/" }}
                                        target='_blank' className="link-attributes">
                                    web design business</Link>where I provide WordPress websites to business owners who need 
                                    their website updated.
                                </p>

                                <p className="marginPushDown">While in school, I finished with an overall GPA of 3.30, a GPA of
                                    3.67 in my upper-division computer science courses, and a 3.94 GPA in my senior year classes - 
                                    I also finished on the Dean's Honor List for both of my semesters in my senior year.
                                </p>
                    </div>
                </div>
        </div>
        </center>
        </>
    )
}

export default ShortAbout;