import React from 'react';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './ProjectContent.css';

function ProjectsContent() {
    return (
        <div className="projects-content">
            <h1 className="projects">PROJECTS</h1>
            <section classname="actual-projects-section">
            <div className="cards">
            <div className="cards__container__1">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <div className="child1">
                            <ReactPlayer url="https://youtu.be/PF3A6o_ZkAc" width="100%" height="100%" controls={true} />
                        </div>
                        <div className="child2">
                        <h1 className="title" id="CloudVend">CloudVend</h1>
                            <p className="marginPushDown">A full-stack web application that allows authenticated users to create 
                                profiles, post descriptive items, and post comments on items.  
                                Authenticated users can also edit and delete their own items and comments, 
                                but can never erase other authenticated user’s data.  MongoDB, Node.js, 
                                and Express.js was used throughout, as well as Passport.js for user 
                                authentication.  HTML, CSS, and JavaScript was used for the front-end, 
                                as well as implementing BootStrap for the design.
                            </p>

                            <p className="marginPushDown">Users who are signed in are able to not only 
                                view specific profiles that are created in the same city as the user, 
                                but they are also able to view all profiles that have been created, 
                                regardless of the city; this same idea is also carried out for items.
                            </p>
                            <Link to={{ pathname: "https://sheltered-peak-30121.herokuapp.com/" }}
                                    target='_blank' className="link-attributes">
                                View Project
                            </Link>
                            <Link to={{ pathname: "https://github.com/MitchellGruner/CloudVend" }}
                                    target='_blank' className="link-attributes">
                                Source Code
                            </Link>
                        </div>
                    </ul>
                    <ul className="cards__items">
                    <div className="child1">
                            <ReactPlayer url="https://youtu.be/sZyEqZzVrc8" width="100%" height="100%" controls={true} />
                        </div>
                        <div className="child2">
                        <h1 className="title" id="MobileLearningApp">Mobile Learning App</h1>
                            <p className="marginPushDown">A React Native application that allows “Subject Matter Experts” (SME) 
                                to post courses, videos, lecture notes, and quizzes to students who are 
                                currently enrolled in their course.  This application implements the Firebase 
                                Realtime Database to store user information.  The Student’s and SME’s credentials 
                                are also stored within the database.  This project was created by a group of six 
                                members who carried out their work in two-week long sprints in an Agile environment.
                            </p>
                            <p className="marginPushDown">Students and SMEs are also able to edit and update their information, such
                                as their first name, last name, username, and biography.  Only users who are granted permission are 
                                able to become SMEs - therefore, not all users can post content.
                            </p>
                            <Link to={{ pathname: "https://expo.io/@calialex/Mobile-Learning-App" }}
                                    target='_blank' className="link-attributes">
                                View Project (Must Download Expo Go App)
                            </Link>
                            <Link to={{ pathname: "https://expo.io/client" }}
                                    target='_blank' className="link-attributes">
                                Expo Go
                            </Link>
                            <Link to={{ pathname: "https://github.com/MitchellGruner/Mobile-Learning-App" }}
                                    target='_blank' className="link-attributes">
                                Source Code
                            </Link>
                        </div>
                    </ul>
                    <ul className="cards__items">
                        <div className="child1">
                            <ReactPlayer url="https://youtu.be/0ZhmxCtSjfw" width="100%" height="100%" controls={true} />
                        </div>
                        <div className="child2">
                        <h1 className="title" id="ThePath">The Path</h1>
                            <p className="marginPushDown">An Object-Oriented Programming in Java application that allows 
                                users to control an “ant” that must evade “spiders” in the game world.  
                                The user must collide with “flags” and “food stations” in order to 
                                succeed, and the movements of all of the game objects are clearly 
                                visible in a container within an iPad III emulator.  This application 
                                uses a library that closely resembles Java Swing.
                            </p>
                            <p className="marginPushDown">The "ant" must collide with all nine flags in sequential order 
                                before their health level reaches zero, or before their food level reaches zero.  "Ants"
                                slow down when their health level diminishes (i.e. when a "spider" collides with the "ant").
                                All game objects, excluding the "flags" and the "ant", are randomly positioned in a box
                                within the iPad III emulator.  The user has the option to play sounds, such as collisions and
                                a background sound, can pause/play the game, and can position fixed game objects.
                            </p>
                            <Link to={{ pathname: "https://github.com/MitchellGruner/-The-Path-OOP-Java-Project" }}
                                    target='_blank' className="link-attributes">
                                Source Code
                            </Link>
                        </div>
                    </ul>
                    <ul className="cards__items">
                        <div className="child1">
                            <ReactPlayer url="https://youtu.be/xojmvRTKvEg" width="100%" height="100%" controls={true} />
                        </div>
                        <div className="child2">
                        <h1 className="title" id="BaseballAggressiveAnalytics">Baseball Aggressive Analytics</h1>
                            <p className="marginPushDown">A data analytics project that implements statistical concepts on a 
                                large data set to 
                                prove that players have become more aggressive over time.  This project was built using
                                the R programming language, and it takes in a single statistical file for input; this file
                                was taken from Kaggle.com, and it houses all batters that have batted from 1871 to 2015
                                in Major League Baseball. 
                            </p>
                            <p className="marginPushDown">Advanced statistical models were used, such as using a t-test for 
                                comparative analysis, using an alternative test, and using a confidence level.  The data was broken
                                up into three periods of time for baseball: early baseball, middle baseball, and late baseball.
                                For this example, I chose to have early baseball run from 1871 to 1943, middle baseball to be from
                                1944 to 1994, and late baseball from 1995 to 2015.  I then compared the results between these three 
                                eras in baseball using statistical models previously mentioned.
                            </p>
                            <Link to={{ pathname: "https://github.com/MitchellGruner/Baseball_Aggressive_Analytics" }}
                                    target='_blank' className="link-attributes">
                                Source Code
                            </Link>
                        </div>
                    </ul>
                    <ul className="cards__items">
                        <div className="child1">
                            <ReactPlayer url="https://youtu.be/SekeIkN_UDE" width="100%" height="100%" controls={true} />
                        </div>
                        <div className="child2">
                        <h1 className="title" id="OperatingSystemSimulator">Operating System Simulator</h1>
                            <p className="marginPushDown">A C++ application that allows the user to use a set of predefined 
                            linux commands, such as ‘touch’, ‘ls’, and ‘cd’, to emulate a working OS.  The user will start the
                            program and pass in commands through the command line.  Depending on what the user passes in, the
                            files on the user's computer will be altered (i.e. if the user types in 'mkdir hello', a new directory 
                            titled 'hello' will be present on the user's computer.
                            </p>
                            <Link to={{ pathname: "https://github.com/MitchellGruner/C-Operating-System-Simulator" }}
                                    target='_blank' className="link-attributes">
                                Source Code
                            </Link>
                        </div>
                    </ul>
                    <ul className="cards__items">
                        <div className="child1">
                            <ReactPlayer url="https://youtu.be/4eQHoETtT_k" width="100%" height="100%" controls={true} />
                        </div>
                        <div className="child2">
                        <h1 className="title" id="MovieAPI">Movie API</h1>
                            <p className="marginPushDown">A web application that prompts the user to enter a movie 
                                (or video game/tv series) and will
                                return instances of whatever the user passes.  More than one movie/video game/tv series may
                                be presented to the user - for example, if the user types in 'Madagascar', there may be several
                                different instances that will show up, since 'Madagascar' has multiple movies, and video games.
                                It is important to note that there will be a counter at the bottom of the page, which will let the
                                user know how many instances of the phrase were returned.
                            </p>
                            <p className="marginPushDown">This web application utilizes an API in order to search for various
                                media across nearly infinite options the user can choose from.
                            </p>
                            <Link to={{ pathname: "https://github.com/MitchellGruner/Movie_API" }}
                                    target='_blank' className="link-attributes">
                                Source Code
                            </Link>
                        </div>
                    </ul>
                    <ul className="cards__items">
                        <div className="child1">
                            <ReactPlayer url="https://youtu.be/4eQHoETtT_k" width="100%" height="100%" controls={true} />
                        </div>
                        <div className="child2">
                        <h1 className="title" id="Hangman">Hangman!</h1>
                            <p className="marginPushDown">A vanilla JavaScript that implements HTML and CSS, as well as the 
                            Bootstrap Framework, that allows end-users to guess letters that are located within a randomly picked 
                            word from a pre-defined array.  The user can have hints displayed to them, but they all cost the user 
                            time - once the time runs out, the game is over.  If the user runs out of lives, the game is over.
                            </p>
                            <p className="marginPushDown">Uses JavaScript, HTML, CSS, and Bootstrap.
                            </p>
                            <Link to={{ pathname: "https://clever-galileo-8dbff3.netlify.app/" }}
                                    target='_blank' className="link-attributes">
                                View Project
                            </Link>
                            <Link to={{ pathname: "https://github.com/MitchellGruner/Hangman" }}
                                    target='_blank' className="link-attributes">
                                Source Code
                            </Link>
                        </div>
                    </ul>
                    <ul className="cards__items">
                        <div className="child1">
                            <CardItem 
                            src="images/logo.png"
                            />
                        </div>
                        <div className="child2">
                        <h1 className="title">Gruner Web Design</h1>
                            <p className="marginPushDown">A WordPress website I created for my business where I provide WordPress 
                                websites to small business owners.  I offered a package to transfer their information from their 
                                current website to a WordPress website.  I would download WordPress on their current domain once the 
                                process was completed, and push my WordPress website that I worked on from my local host to their 
                                domain space.  I also would make the website mobile and tablet friendly, make it ADA compliant, back it up 
                                weekly for six years, and install an SSL certificate.
                            </p>
                            <p className="marginPushDown">This website has several different pages, plugins, and themes that I installed
                                using WordPress.  I was able to make it secure, make it ADA compliant, and also make it mobile and tablet 
                                friendly.
                            </p>
                            <Link to={{ pathname: "https://www.grunerwebdesign.com/" }}
                                    target='_blank' className="link-attributes">
                                WordPress Website
                            </Link>
                        </div>
                    </ul>
                    <ul className="cards__items">
                        <div className="child1">
                            <CardItem 
                            src="images/fosters.jpg"
                            />
                        </div>
                        <div className="child2">
                        <h1 className="title">Foster's Tree Services</h1>
                            <p className="marginPushDown">A sample WordPress website I made for a fictional tree cutting company.  I created 
                                this WordPress website during my senior year of college, and I wanted to use it to showcase my WordPress skills
                                to potential clients in the industry.  This WordPress website has all of the plugins that exist within my other 
                                WordPress website (e.g. is secure, ADA compliant, etc.).  It is important to note that both of these WordPress 
                                websites use copyright-free content; they also offer a contact form that redirects to email address.
                            </p>
                            <Link to={{ pathname: "https://www.fosterstreeservices.com/" }}
                                    target='_blank' className="link-attributes">
                                WordPress Website
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
            </section>
        </div>
    )
}

export default ProjectsContent;
