import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these Personal Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/CloudVend.png"
                        text="A full-stack web application"
                        label="CloudVend"
                        path="/projects"/>
                        <CardItem 
                        src="images/MobileLearningApp.png"
                        text="An educational mobile app"
                        label="Mobile Learning App"
                        path="/projects"/>
                        <CardItem 
                        src="images/ThePath.png"
                        text="An OOP in Java 2D game"
                        label="The Path"
                        path="/projects"/>
                    </ul>
                    <ul className="cards__items">
                    <CardItem 
                        src="images/AggressiveBaseball.png"
                        text="A program that showes hitter trends"
                        label="Baseball Aggressive Analytics"
                        path="/projects"/>
                        <CardItem 
                        src="images/OSSimulator.png"
                        text="A program that simulates certain OS functions"
                        label="Operating System Simulator"
                        path="/projects"/>
                        <CardItem
                        src="images/Movie.png"
                        text="An app that searches an API for relevant movies"
                        label="Movie API"
                        path="/projects"/>
                    </ul>
                    <ul className="cards__items">
                    <Link to={{ pathname: "https://www.grunerwebdesign.com/" }}
                                    target='_blank' className="link-attributes">
                                Gruner Web Design WordPress website
                            </Link>
                            <Link to={{ pathname: "https://www.fosterstreeservices.com/" }}
                                    target='_blank' className="link-attributes">
                                Foster's Tree Services WordPress website
                            </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;