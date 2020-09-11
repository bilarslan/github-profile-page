import React from 'react';
import './Card.css';

function Card({ data }) {

    return (
        <div className='card'>
            <div>
                <img className='avatar' src={data.avatar_url} alt={data.login} />
            </div>
            <div className='user-info'>
                <div className='info'>
                    <h2>{data.name}</h2>
                    {data.bio && <p>{data.bio}</p>}
                </div>

                {data.company && <p><i className='fas fa-building'></i>{data.company}</p>}
                {data.location && <p><i className='fas fa-map-marker-alt' />{data.location}</p>}
                <div className='links-info'>
                    <ul>
                        {data.email && <li><i className='fas fa-envelope'></i></li>}
                        <li><i className='fab fa-github'></i></li>
                        {data.twitter_username != null && <li><i className='fab fa-twitter'></i></li>}
                        {data.linkedin_url != null && <li><i className='fab fa-linkedin-in'></i></li>}
                    </ul>
                </div>
                <div className='git-info'>
                    <ul>
                        <li><i className='fas fa-user-friends' />{`${data.followers} Followers · ${data.following} Following`}</li>
                        <li><i className='fas fa-book' />{`${data.public_repos} Repos`}</li>
                    </ul>
                </div>

            </div>
        </div>
    )

}

export default Card;