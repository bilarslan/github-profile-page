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
                    <h2>{data.name != null && data.name}</h2>
                    {data.bio != null&& <p>{data.bio}</p>}
                </div>

                {data.company && <p><i className='fas fa-building'></i>{data.company}</p>}
                {data.location && <p><i className='fas fa-map-marker-alt' />{data.location}</p>}
                <div className='links-info'>
                    <ul>
                        {data.email && <li><a href={`mailto:${data.email}`} className='nav-link' target='_blank'><i className='fas fa-envelope' /></a></li>}
                        <li><a href={data.html_url} className='nav-link' target='_blank'><i className='fab fa-github' /></a></li>
                        {data.twitter_username != null && <li><a href={`https://twitter.com/${data.twitter_username}`} className='nav-link' target='_blank'><i className='fab fa-twitter' /></a></li>}
                        {data.linkedin_url != null && <li><a href={data.linkedin_url} className='nav-link' target='_blank'><i className='fab fa-linkedin-in' /></a></li>}
                    </ul>
                </div>
                {data.showRepoStatus === true &&
                    <div className='git-info'>
                        <ul>
                            <li><i className='fas fa-user-friends' />{`${data.followers} Followers · ${data.following} Following`}</li>
                            <li><i className='fas fa-book' />{`${data.public_repos} Repos`}</li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )

}

export default Card;