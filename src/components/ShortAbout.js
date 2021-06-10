import React from 'react';
import CardItem from './CardItem';
import './ShortAbout.css';
import { Link } from 'react-router-dom';

function ShortAbout() {
    return (
        <>
            <section classname="actual_projects_section">
            <div className="cards">
            <div className="cards__container__1">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <div className="child1">
                            <CardItem 
                            src="images/main.jpg"
                            path="/about"/>
                        </div>
                        <div className="child2">
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

                            <Link to="/contact" className="link-attributes">
                                Contact Me
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default ShortAbout;