import React from 'react';
import HeaderMid from '../HeaderMid';
import HeaderTop from '../HeaderTop';
import HeaderMenu from '../HeaderMenu';

// import 3 folder: HeaderTop - HeaderMid - HeaderMenu

function Header(props) {
    return (
        <header className="header">
            <HeaderTop/>
            <HeaderMid/>
            <HeaderMenu/>
        </header>
    );
}

export default Header;