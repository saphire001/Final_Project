import React from 'react';
import { Link } from 'react-router-dom';

const Page3 = props => {
    return (
        <div className="page-three">
            <h3>Register Account</h3>
            <ul>

                <li><Link to={'page/1'}>Page 1</Link></li>              {/****to={'/page1'}: look like normal links ***/}
                <li><Link to={'page/2'}>Page 2</Link></li>              {/*****component does not need to know if these are variable routes****/}
                <li><Link to={'page/3'}>Page 3</Link></li>
                <li><Link to={'page/4'}>Page 4</Link></li>              {/*****for the component that makes the link**********/}

            </ul>
        </div>
    )
}

export default Page3;
