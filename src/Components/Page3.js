import React from 'react';
import { Link } from 'react-router-dom';

const Page3 = props => {
    return (
        <div className="page-three">
            <h3>Register Account</h3>
            <ul>

                <li><Link to={'page/1'}>Page 1</Link></li>              
                <li><Link to={'page/2'}>Page 2</Link></li>              
                <li><Link to={'page/3'}>Page 3</Link></li>
                <li><Link to={'page/4'}>Page 4</Link></li>              

            </ul>
        </div>
    )
}

export default Page3;