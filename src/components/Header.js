import React from 'react';
import PropTypes from 'prop-types';

const Header = ({header,desc,tempArr}) =>{
    return(
        <div>
            <h1 data-test="component-header">{header}</h1>
            <p data-test="component-desc">{desc}</p>
            
        </div>
    )
}

Header.propTypes = {
    header: PropTypes.string,
    desc: PropTypes.string,
    tempArr: PropTypes.arrayOf(PropTypes.shape({
        fName: PropTypes.string,
        lName: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number,
        status: PropTypes.bool
    }))
}

export default Header;