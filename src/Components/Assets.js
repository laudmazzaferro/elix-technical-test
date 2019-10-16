import React from 'react';
import {Link} from 'react-router-dom'
//import PropTypes from 'prop-types';

class Assets extends React.Component{
    render(){
        return(
            <div>
                <Link to={`/entities`} className="charapter-link">
                    <button>click</button>
              </Link>
              <p>assets</p>
            </div>
        )
    }
}

export default Assets;