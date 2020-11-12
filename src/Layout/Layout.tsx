import React from 'react';
import Carosel from './Carosel';
import Headers from './Headers';

const Layout:React.FC<{}>=(props)=>{

    return (
        <div>
            <Headers />
            <main>{props.children}</main>
        </div>
    )
}

export default Layout;
