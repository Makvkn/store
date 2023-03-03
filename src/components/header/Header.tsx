import React from 'react';
import "./header.css"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SearchIcon from '@mui/icons-material/Search';


const Header = () => {

    return (
        <div className="header">
            <div className="headerLeft">NeuroStore</div>
            <div className="headerMiddle">
                <ul>
                    <li>NeuroHome</li>
                    <li>NeuroLearn</li>
                    <li>NeuroSupport</li>
                    <li>NeuroAbout</li>
                </ul>
            </div>
            <div className="headerRight">
                <nav className="headerRight_ul">
                    <nav className="headerRight_child">
                        <PermIdentityIcon/>
                    </nav>
                    <nav className="headerRight_child">
                        <SearchIcon/>
                    </nav>
                    <nav className="headerRight_child">
                        <ProductionQuantityLimitsIcon/>
                    </nav>
                </nav>
            </div>
        </div>
    );
};

export default Header;