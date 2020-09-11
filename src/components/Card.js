import React from 'react';
import './Card.css';

function Card() {

    return (
        <div className='card'>
            <div>
                <img class="avatar" src="https://avatars2.githubusercontent.com/u/9725900?v=4" alt="bilarslan" />
            </div>
            <div className="user-info">
                <div className='info'>
                    <h2>Bilal Arslan</h2>
                    <p>Full-Stack Developer · ReactJS · .Net Core - NodeJS</p>
                </div>

                <p><i class="fas fa-building"></i> Freelancer</p>
                <p><i className="fas fa-map-marker-alt" /> Turkiye</p>
                <div className='links-info'>
                    <ul>
                        <li><i className="fas fa-envelope"></i></li>
                        <li><i className="fab fa-github"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-linkedin-in"></i></li>
                    </ul>
                </div>
                <div className='git-info'>
                    <ul>
                        <li><i className="fas fa-user-friends" />10 Followers · 10 Following</li>
                        <li><i className="fas fa-book" />10 Repos</li>
                    </ul>
                </div>

            </div>
        </div>
    )

}

export default Card;