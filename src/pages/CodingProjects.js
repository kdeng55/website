import React from "react";
import './CodingProjects.css'
import reactbox from '../img/react_box.png';
import wordle from '../img/Frame 1.png'
import checkers from '../img/checkers.png'
import spotify from '../img/spotify.png'



export default function CodingProjects () {
    const website = () => {
        const pdfURL = 'https://github.com/kdeng55/website';
        window.open(pdfURL, '_blank');
      };

    const checkerslink = () => {
        const pdfURL = 'https://github.com/kdeng55/MCTS-and-Minimax-Checkers';
        window.open(pdfURL, '_blank');
    };

    const wordlelink= () => {
        const pdfURL = 'https://github.com/kdeng55/WordleSolver';
        window.open(pdfURL, '_blank');
        };

    const spotifylink= () => {
        const pdfURL = 'https://github.com/kdeng55/spotifyrecommendations';
        window.open(pdfURL, '_blank');
        };
    

    

    
    return <div>
        <h1 className="code-text-head">Coding Projects</h1>
        <div className="page">
            <div className="row-container-code">
            <div className="row-coding">
                <div onClick={website} className="container-1">
                    <img src={reactbox} className="react-pic" alt="react-pic"/>
                </div>
                <div className="container-1-text">
                <h2>This Website!</h2>
                <p>React, Javascript, HTML and CSS</p>
                </div>
                <div onClick={checkerslink} className="container-2">
                <img src={checkers} className="checkers-pic" alt="checkerspic"/>
                </div>
                <div className="container-2-text">
                <h2>AI Implementation of Checkers</h2>
                <p>Coded with MCTS and Minimax algorithm</p>
                </div>
            </div>
            <div className="row-container-code">
            <div className="row-coding">
                <div onClick={wordlelink} className="container-3">
                    <img src={wordle} className="wordle-pic" alt="wordle"/>
                </div>
                <div className="container-3-text">
                <h2>Wordle Solver</h2>
                <p>Coded in Python</p>
                </div>
                <div onClick={spotifylink} className="container-4">
                    <img src={spotify} className="spotify-pic" alt="spotifypicture"/>
                </div>
                <div className="container-4-text">
                <h2>Song Recommendation System with Spotify</h2>
                <p>Calculated using cosine similarity</p>
                </div>
            </div>
            </div>
            </div>
        </div>

    </div>
}