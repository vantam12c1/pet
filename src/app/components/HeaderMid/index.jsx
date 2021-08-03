import React from 'react';
import './style.scss';
import { IconName } from "react-icons/cg";

function HeaderMid(props) {
    return (
            <div className="header-mid">
                <div className="header-inner">
                    <img  src="http://mauweb.monamedia.net/petcare/wp-content/uploads/2019/11/Pet-Care-1.png"  alt="Pet Care"/>
                    <ul>
                        <li className="Call-us">
                            <i className="fas fa-band-aid"></i>
                            <p className= "font-color">
                                Call Us 
                                <a>
                                    <strong>076 922 0162</strong>
                                </a>
                            </p>
                        </li>
                        <li className="Cart-Header">
                            <i className="fas fa-band-aid"></i>
                            <p className= "font-color">
                                <a>
                                    <strong>GIỎ HÀNG / 0 ₫</strong>
                                </a>
                            </p>
                        </li>
                        <li>
                            
                            <i className = "icon-search"></i>
                        </li>
                    </ul>
                </div>
                
                
                
            </div>
            
        
    );
}

export default HeaderMid;