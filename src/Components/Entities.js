import React from 'react';
//import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

class Entities extends React.Component{
    render(){
        return(
            <div>
                <Link to={`/`} className="charapter-link">
                    <button>click</button>
              </Link>
              <p>entities</p>
            </div>
        )
    }
}

export default Entities;