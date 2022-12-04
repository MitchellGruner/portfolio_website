import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h2>Personal Projects</h2>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/QuizList.png"
                        text="A Quiz-like game"
                        label="QuizList"
                        path="/projects#QuizList"/>
                        <CardItem 
                        src="images/CloudVend.png"
                        text="A full-stack web application"
                        label="CloudVend"
                        path="/projects#CloudVend"
                        />
                        <CardItem
                        src="images/MobileLearningApp.png"
                        text="An educational mobile app"
                        label="Mobile Learning App"
                        path="/projects#MobileLearningApp"/>
                        <CardItem 
                        src="images/ThePath.png"
                        text="An OOP in Java 2D game"
                        label="The Path"
                        path="/projects#ThePath"/>
                    </ul>
                    <ul className="cards__items">
                    <CardItem
                        src="images/hangman.jpg"
                        text="A hangman game with a timer"
                        label="Hangman!"
                        path="/projects#Hangman"/>
                    <CardItem 
                        src="images/AggressiveBaseball.png"
                        text="A program that showes hitter trends"
                        label="Baseball Aggressive Analytics"
                        path="/projects#BaseballAggressiveAnalytics"/>
                        <CardItem 
                        src="images/OSSimulator.png"
                        text="A program that simulates certain OS functions"
                        label="Operating System Simulator"
                        path="/projects#OperatingSystemSimulator"/>
                        <CardItem
                        src="images/Movie.png"
                        text="An app that searches an API for relevant movies"
                        label="Movie API"
                        path="/projects#MovieAPI"/>
                    </ul>
                    <ul className="cards__items centered">

                    <center> 
                    <h2 className="marginDown">WordPress Websites</h2>
                    <div class="left">
                    <CardItem
                        src="images/logo.png"
                        text="Gruner Web Design"
                        label="Gruner Web Design"
                        path="/projects"/>
                    </div>
                    <div class="right">
                    <CardItem
                        src="images/fosters.jpg"
                        text="Foster's Tree Service"
                        label="Foster's Tree Service"
                        path="/projects"/>
                    </div>
                    </center>   
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;