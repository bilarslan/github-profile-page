import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../components/Card';

const APIURL = 'https://api.github.com/users/YOUR_USER_NAME';

function Home() {

    const [data, setData] = useState(null);

    const extraData = {
        linkedin_url: null, //'https://www.linkedin.com/in/bilarslan/'
    };

    useEffect(() => {
        axios.get(APIURL)
            .then(result => {
                console.log(result.data);
                setData(Object.assign(result.data, extraData));
            })
            .catch(error => {
                console.log('erorrr');
            });
    }, []);

    return (
        <>
            {data == null &&
                <i className="fas fa-spinner"></i>
            }
            {data != null &&
                <Card data={data} />
            }
        </>
    )
}

export default Home;